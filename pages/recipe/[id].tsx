import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";

interface Recipe {
  name: string
  description: string
  mealType: string
  imageUrl: string
}

interface RecipeData {
  recipe: Recipe
}

interface RecipeVars {
  id: string | string[]
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

  const { loading, error, data } = useQuery<RecipeData, RecipeVars>(RECIPE_QUERY, {
    variables: { id },
  });

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
        <PageHeading title={recipe.name} />


        <img src={recipe.imageUrl} alt={recipe.name} className="rounded-lg" />
        <h2>{recipe.description}</h2>
      </PageContainer>
    </>
  );
};

export default ShareRecipe;
