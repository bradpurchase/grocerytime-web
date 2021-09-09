// Parse Recipe API
// Takes a URL for a recipe webpage and returns JSON data.
//
// It tries at first to use the Recipe schema (schema.org).
// If this is not possible, it tries to parse the webpage metadata.
const jsdom = require("jsdom");

type RecipeImage = {
  url: string;
};

type Instruction = {
  "@type": string;
  text: string;
  name?: string;
  url?: string;
  itemListElement?: [Instruction];
};

type Recipe = {
  name?: string;
  description?: string;
  recipeCategory?: string | [string];
  image: RecipeImage;
  recipeIngredient: [string];
  recipeInstructions?: Instruction[];
};

class RecipeParser {
  url: string;
  dom: any;
  recipe: Recipe;

  constructor(url: string) {
    this.url = url;
  }

  parseWebpage() {
    return fetch(this.url)
      .then((resp) => resp.text())
      .then((resp) => {
        this.dom = new jsdom.JSDOM(resp);
        return this.dom.window.document.querySelector(
          'script[type="application/ld+json"]'
        );
      })
      .then((resp) => resp.textContent)
      .catch((err) => err);
  }

  parse(data: string) {
    const schema = JSON.parse(data);
    return this.fetchRecipeInSchema(schema);
  }

  fetchRecipeInSchema(schema: any) {
    // Handle case where schema contains a graph object
    // e.g. https://12tomatoes.com/garbage-bread/
    // see: https://www.w3.org/TR/json-ld11/
    if (!(schema instanceof Array)) {
      if (schema["@graph"]) schema = schema["@graph"];
    }
    let recipe = schema;
    if (schema instanceof Array) {
      recipe = schema.find((i) => i["@type"] == "Recipe");
    }
    this.recipe = recipe;
  }

  fetchMetatagProperty(tag: string) {
    return this.dom.window.document
      .querySelector(`meta[property='${tag}']`)
      .getAttribute("content");
  }

  fetchName() {
    return this.recipe?.name || this.fetchMetatagProperty("og:title");
  }

  fetchDescription() {
    return (
      this.recipe?.description || this.fetchMetatagProperty("og:description")
    );
  }

  fetchCategory() {
    const category = this.recipe?.recipeCategory;
    if (category instanceof Array) {
      for (let i = 0; i < category.length; i++) {
        const match = this.matchRecipeCategory(category[i]);
        if (match) return match;
      }
      return "";
    }
    return this.matchRecipeCategory(category);
  }

  matchRecipeCategory(category: string) {
    const categoryTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
    const match = categoryTypes.find((v) => category?.includes(v));
    if (match) return match;
    return "";
  }

  fetchImage() {
    return this.recipe?.image?.url || this.fetchMetatagProperty("og:image");
  }

  // Ingredient parsing

  fetchIngredients() {
    if (this.recipe.recipeIngredient != null) {
      return this.recipe.recipeIngredient.map((i) => this.parseIngredient(i));
    }
    const ingList = this.dom.window.document.querySelector(
      'ul[class*="ingredient"]'
    );
    const ingredients = ingList.getElementsByTagName("li");
    if (!ingredients) return null;
    let ing = [];
    for (const ingredient of ingredients) {
      ing.push(this.parseIngredient(ingredient.innerText));
    }
    return ing;
  }

  parseIngredient(ingredient: string) {
    ingredient = ingredient.trim();

    // Isolate the amount and return it along with the "remainder" of the ingredient line
    let [amount, ingredientRemainder] = this.parseAmount(ingredient);

    // Handle notes in parenthesis (e.g. "almond milk (or coconut milk)")
    let notes = this.parseNotes(ingredientRemainder);
    if (notes.length > 0) {
      ingredientRemainder = ingredientRemainder.replace(notes, "").trim();
    }

    let [unit, originalUnit] = this.parseUnit(
      ingredientRemainder.split(" ")[0]
    );
    ingredientRemainder = !!originalUnit
      ? ingredientRemainder.replace(originalUnit, "").trim()
      : ingredientRemainder.replace(unit, "").trim();
    const name = ingredientRemainder;

    return {
      name: name,
      amount: amount,
      unit: unit,
      notes: notes,
    };
  }

  parseAmount(ingredient: string) {
    // Handle fractions/unicode fractions
    // https://github.com/nsafai/recipe-parser/blob/master/src/convert.ts
    const fractions = this.fractions();
    const numericAndFractionRegex =
      /^(\d+\/\d+)|(\d+\s\d+\/\d+)|(\d+.\d+)|\d+/g;
    const numericRangeWithSpaceRegex =
      /^(\d+\-\d+)|^(\d+\s\-\s\d+)|^(\d+\sto\s\d+)/g; // for ex: "1 to 2" or "1 - 2"
    const unicodeFractionRegex = /\d*[^\u0000-\u007F]+/g;
    const onlyUnicodeFraction = /[^\u0000-\u007F]+/g;

    if (ingredient.match(unicodeFractionRegex)) {
      const numericPart = this.getFirstMatch(
        ingredient,
        numericAndFractionRegex
      );
      const unicodePart = this.getFirstMatch(
        ingredient,
        numericPart ? onlyUnicodeFraction : unicodeFractionRegex
      ).trim();

      if (fractions[unicodePart]) {
        return [
          `${numericPart} ${fractions[unicodePart]}`,
          ingredient
            .replace(this.getFirstMatch(ingredient, unicodeFractionRegex), "")
            .trim(),
        ];
      }
    }

    if (ingredient.match(numericRangeWithSpaceRegex)) {
      const quantity = this.getFirstMatch(
        ingredient,
        numericRangeWithSpaceRegex
      )
        .replace("to", "-")
        .split(" ")
        .join("");
      const ingredientRemainder = ingredient
        .replace(this.getFirstMatch(ingredient, numericRangeWithSpaceRegex), "")
        .trim();
      return [
        ingredient.match(numericRangeWithSpaceRegex) && quantity,
        ingredientRemainder,
      ];
    } else if (ingredient.match(numericAndFractionRegex)) {
      const quantity = this.getFirstMatch(ingredient, numericAndFractionRegex);
      const ingredientRemainder = ingredient
        .replace(this.getFirstMatch(ingredient, numericAndFractionRegex), "")
        .trim();
      return [
        ingredient.match(numericAndFractionRegex) && quantity,
        ingredientRemainder,
      ];
    }

    return ["0", ingredient];
  }

  parseUnit(input: string) {
    const units = this.units();
    const pluralUnits = this.pluralUnits();
    if (units[input] || pluralUnits[input]) {
      return [input];
    }
    for (const unit of Object.keys(units)) {
      for (const shorthand of units[unit]) {
        if (input === shorthand) {
          return [unit, input];
        }
      }
    }
    for (const pluralUnit of Object.keys(pluralUnits)) {
      if (input === pluralUnits[pluralUnit]) {
        return [pluralUnit, input];
      }
    }
    return [];
  }

  parseNotes(ingredient: string) {
    const parensRegex = /\(([^\)]+)\)/;
    const match = this.getFirstMatch(ingredient, parensRegex);
    return match;
  }

  // Instructions parsing

  fetchInstructions() {
    const recipeInstructions = this.recipe.recipeInstructions;
    if (recipeInstructions != null) {
      return this.recipe.recipeInstructions.map((ins) => ins);
    }
  }

  // Private methods

  private getFirstMatch(line: string, regex: RegExp) {
    const match = line.match(regex);
    return (match && match[0]) || "";
  }

  private fractions() {
    return {
      "½": "1/2",
      "⅓": "1/3",
      "⅔": "2/3",
      "¼": "1/4",
      "¾": "3/4",
      "⅕": "1/5",
      "⅖": "2/5",
      "⅗": "3/5",
      "⅘": "4/5",
      "⅙": "1/6",
      "⅚": "5/6",
      "⅐": "1/7",
      "⅛": "1/8",
      "⅜": "3/8",
      "⅝": "5/8",
      "⅞": "7/8",
      "⅑": "1/9",
      "⅒": "1/10",
    };
  }

  private units() {
    return {
      cup: ["c", "c.", "C", "Cups"],
      gallon: ["gal"],
      ounce: ["oz", "oz."],
      pint: ["pt", "pts", "pt."],
      pound: ["lb", "lb.", "lbs", "lbs.", "Lb", "Lbs"],
      quart: ["qt", "qt.", "qts", "qts."],
      tablespoon: [
        "tbs",
        "tbsp",
        "Tbsp",
        "tbspn",
        "T",
        "T.",
        "Tablespoons",
        "Tablespoon",
      ],
      teaspoon: ["tsp", "tspn", "t", "t."],
      gram: ["g", "g."],
      kilogram: ["kg", "kg.", "Kg", "Kg."],
      liter: ["l", "l.", "L", "L."],
      milligram: ["mg", "mg."],
      milliliter: ["ml", "ml.", "mL", "mL."],
      package: ["pkg", "pkgs"],
      stick: ["sticks"],
      piece: ["pcs", "pcs."],
      pinch: ["pinch"],
      small: ["Small"],
      medium: ["Medium"],
      large: ["large", "Large"],
    };
  }

  private pluralUnits() {
    return {
      cup: "cups",
      gallon: "gallons",
      ounce: "ounces",
      pint: "pints",
      pound: "pounds",
      quart: "quarts",
      tablespoon: "tablespoons",
      teaspoon: "teaspoons",
      gram: "grams",
      kilogram: "kilograms",
      liter: "liters",
      milligram: "milligrams",
      milliliter: "milliliters",
      clove: "cloves",
      bag: "bags",
      box: "boxes",
      pinch: "pinches",
      can: "cans",
      slice: "slices",
      piece: "pieces",
    };
  }

  // Serialization

  json() {
    return {
      url: this.url,
      name: this.fetchName(),
      description: this.fetchDescription(),
      category: this.fetchCategory(),
      image: this.fetchImage(),
      ingredients: this.fetchIngredients(),
      instructions: this.fetchInstructions(),
    };
  }
}

export default async function (req, res) {
  return new Promise<void>((resolve) => {
    const authHeader = req.headers["authorization"];
    if (authHeader != process.env.WEB_API_KEY) {
      res.status(500).json({});
      return resolve();
    }

    const url = req.query.url;
    const recipeParser = new RecipeParser(url);
    recipeParser
      .parseWebpage()
      .then((data) => recipeParser.parse(data))
      .then(() => {
        res.status(200).json(recipeParser.json());
        resolve();
      })
      .catch((err) => {
        console.error("parse error:", err);
        res.json({ error: err });
        res.status(500).end;
        return resolve();
      });
  });
}
