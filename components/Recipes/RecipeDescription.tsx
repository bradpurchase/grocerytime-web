import React, { useEffect, useState } from "react";
import { Recipe } from "../../types/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeDescription: React.FC<Props> = ({ recipe }: Props) => {
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

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Description</h3>

      <p className="text-lg">
        <span
          id="desc"
          className={
            descExpanded ? "" : "overflow-hidden overflow-ellipsis line-clamp-4"
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
      </p>
    </div>
  );
};

export default RecipeDescription;
