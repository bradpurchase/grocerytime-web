import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Recipe } from "../../types/Recipe";

import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";

import RecipeHeader from "../../components/Recipes/RecipeHeader";
import RecipeDescription from "../../components/Recipes/RecipeDescription";
import RecipeIngredients from "../../components/Recipes/RecipeIngredients";

interface RecipeData {
  recipe: Recipe;
}

interface RecipeVars {
  id: string | string[];
}

const RECIPE_QUERY = gql`
  query Recipe($id: ID!) {
    recipe(id: $id) {
      __typename
      id
      name
      description
      mealType
      url
      imageUrl
      ingredients {
        __typename
        id
        name
        amount
        unit
        notes
      }
      createdAt
    }
  }
`;

const ShareRecipe = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery<RecipeData, RecipeVars>(
    RECIPE_QUERY,
    {
      variables: { id },
    }
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  const { recipe } = data;

  return (
    <>
      <Head>
        <title>{recipe.name} on GroceryTime</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PageContainer pageStyle="mini">
        <PageHeading />

        <RecipeHeader recipe={recipe} />

        <hr className="border-gray-200 dark:border-gray-500 flex my-10" />

        <RecipeDescription recipe={recipe} />

        {recipe.ingredients.length > 0 ? (
          <>
            <hr className="border-gray-200 dark:border-gray-500 flex my-10" />

            <RecipeIngredients recipe={recipe} />
          </>
        ) : (
          ""
        )}
      </PageContainer>
    </>
  );
};

export default ShareRecipe;
