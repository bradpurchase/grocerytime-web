import React, { useEffect, useState } from "react";
import { Recipe } from "../../types/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeHeader: React.FC<Props> = ({ recipe }: Props) => {
  const [canToggleDesc, setCanToggleDesc] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

  useEffect(() => {
    setCanToggleDesc(descIsClamped());
  }, []);

  // Is the description truncated? Determines whether or not to show the
  // toggle to expand/contract the description ("Show more"/"Show less")
  const descIsClamped = (): boolean => {
    const elem = document.getElementById("desc");
    return elem?.scrollHeight > elem?.clientHeight;
  };

  const urlHost = (): string => {
    const url = new URL(recipe.url);
    return url.host.replace("www.", "");
  };

  const mealTypeLabelColor = (): string => {
    const mealType = recipe.mealType.toLowerCase();
    console.log(mealType);
    switch (mealType) {
      case "breakfast":
        return "orange";
      case "lunch":
        return "green";
      case "dinner":
        return "red";
      case "snack":
        return "blue";
      case "dessert":
        return "pink";
      default:
        return "gray";
    }
  };

  return (
    <>
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="object-cover w-full max-h-60 lg:max-h-72 rounded-lg"
      />

      <div className="py-4">
        <small
          className={`text-${mealTypeLabelColor()}-500 text-sm uppercase font-semibold`}
        >
          {recipe.mealType}
        </small>
        <h1 className="text-3xl font-bold py-2">{recipe.name}</h1>
        <h2 className="text-lg">
          <span
            id="desc"
            className={
              descExpanded
                ? ""
                : "overflow-hidden overflow-ellipsis line-clamp-4"
            }
          >
            {recipe.description}
          </span>
          <div className={canToggleDesc ? "flex" : "hidden"}>
            <span
              className="flex py-2 text-red-500 cursor-pointer"
              onClick={() => setDescExpanded(!descExpanded)}
            >
              {descExpanded ? "Show less" : "Show more"}
            </span>
          </div>
        </h2>

        <a
          href={recipe.url}
          className="text-gray-500 py-4 inline-flex"
          target="_blank"
          rel="noreferrer noopener"
        >
          {urlHost()}
        </a>
      </div>
    </>
  );
};

export default RecipeHeader;
