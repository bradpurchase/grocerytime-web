// Parse Recipe API
// Takes a URL for a recipe webpage and returns JSON data.
//
// It tries at first to use the Recipe schema (schema.org). 
// If this is not possible, it tries to parse the webpage metadata.
const jsdom = require("jsdom")

function parseRecipeWebpage(url) {
  fetch(url)
    .then(resp => {
      return resp.text()
    })
    .then(html => {
      //console.log(html)
      const dom = new jsdom.JSDOM(html)
      const schemaScript = dom.window.document.querySelector('script[type="application/ld+json"]')
      //console.log(schemaScript.textContent)
      
      // TODO this isn't returning as expected. line 50 is undefined
      return schemaScript.textContent
    })
    .catch(err => {
      console.error("error:", err)
    })
}

function fetchRecipeInSchema(json) {
  let s = json;
  // Handle case where schema contains a graph object
  // e.g. https://12tomatoes.com/garbage-bread/
  // see: https://www.w3.org/TR/json-ld11/
  if (!(s instanceof Array)) {
    if (s["@graph"]) s = s["@graph"];
  }
  let recipe = s;
  if (s instanceof Array) {
    recipe = s.find((i) => i["@type"] == "Recipe");
  }
  return recipe;
}

function fetchRecipeName(recipe) {
  //return recipe?.name || this.fetchMetatagProperty("og:title");
  return recipe?.name
}

async function handler(req, res) {
  const url = req.query.url
  const schema = parseRecipeWebpage(url)
  console.log(schema)
  //const jsonSchema = JSON.parse(schema)
  //const recipe = fetchRecipeInSchema(jsonSchema);
  const json = {
    url: url,
    //name: fetchRecipeName(recipe),
    // description: this.fetchRecipeDescription(recipe),
    // category: this.fetchRecipeCategory(recipe),
    // image: this.fetchRecipeImage(recipe),
    // ingredients: this.fetchIngredients(recipe),
  }
  res.status(200).json(json)
}

export default handler
