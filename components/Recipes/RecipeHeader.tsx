import Image from "next/image";

import { Recipe } from "../../types/Recipe";
import Button from "../../components/Button";

interface Props {
  recipe: Recipe;
}

const RecipeHeader: React.FC<Props> = ({ recipe }: Props) => {
  const urlHost = (): string => {
    const url = new URL(recipe.url);
    return url.host.replace("www.", "");
  };

  const mealTypeLabelColor = (): string => {
    const mealType = recipe.mealType.toLowerCase();
    switch (mealType) {
      case "breakfast":
        return "text-orange";
      case "lunch":
        return "text-green-500";
      case "dinner":
        return "text-red-500";
      case "snack":
        return "text-blue-500";
      case "dessert":
        return "text-pink-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <>
      {recipe.imageUrl ? (
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="object-cover w-full max-h-60 lg:max-h-72 rounded-lg"
        />
      ) : (
        <Image
          src="/images/RecipeImagePlaceholder.jpg"
          className="rounded-lg"
          layout="responsive"
          objectFit="cover"
          width={750}
          height={300}
        />
      )}

      <div className="py-4">
        <small
          className={`${mealTypeLabelColor()} text-sm uppercase font-semibold`}
        >
          {recipe.mealType}
        </small>
        <h1 className="text-3xl font-bold pt-2">{recipe.name}</h1>

        <a
          href={recipe.url}
          className="text-gray-500 text-lg py-4 inline-flex"
          target="_blank"
          rel="noreferrer noopener"
        >
          {urlHost()}
        </a>
      </div>

      <div className="space-y-2">
        <a
          href={recipe.url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex"
        >
          <Button label="Visit Recipe Page" backgroundColor="secondary" />
        </a>
        <a
          href={`grocerytime://recipe/${recipe.id}`}
          target="_blank"
          rel="noreferrer noopener"
          className="flex"
        >
          <Button label="Open in GroceryTime..." />
        </a>
      </div>
    </>
  );
};

export default RecipeHeader;
