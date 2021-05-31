import React from "react";
import { Recipe } from "../../types/Recipe";
import { RecipeIngredient } from "../../types/RecipeIngredient";

interface Props {
  recipe: Recipe;
}

const RecipeIngredients: React.FC<Props> = ({ recipe }: Props) => (
  <div className="space-y-4">
    <h3 className="text-2xl font-bold">Ingredients</h3>

    <ul className="list-disc py-2 px-4 space-y-2">
      {recipe.ingredients.map((ing: RecipeIngredient) => (
        <li>{ing.name}</li>
      ))}
    </ul>
  </div>
);

export default RecipeIngredients;
