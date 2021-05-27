import { Recipe } from "../../types/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeHeader: React.FC<Props> = ({ recipe }: Props) => {
  const urlHost = () => {
    const url = new URL(recipe.url);
    return url.host.replace("www.", "");
  };

  return (
    <>
      <img src={recipe.imageUrl} alt={recipe.name} className="rounded-lg" />

      <div className="py-4">
        <small className="text-sm uppercase text-red-500 font-semibold">
          {recipe.mealType}
        </small>
        <h1 className="text-3xl font-bold py-2">{recipe.name}</h1>
        <h2 className="text-lg">{recipe.description}</h2>

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
