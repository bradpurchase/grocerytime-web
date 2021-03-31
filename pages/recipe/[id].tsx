import Head from "next/head";
import { useRouter } from "next/router";
import { useLazyQuery, gql, useMutation } from "@apollo/client";

import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import { useEffect } from "react";

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

  const [recipeQuery, { loading, error }] = useLazyQuery(RECIPE_QUERY);

  useEffect(() => {
    if (id) recipeQuery({ variables: { id: id } });
  }, [id]);

  return (
    <>
      <Head>
        <title>Recipe {id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PageContainer pageStyle="mini">
        <PageHeading title={`Recipe ${id}`} />
      </PageContainer>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p className="text-red-500 text-lg font-bold my-6">
              This password reset link has expired. Please use the Forgot
              Password form again to retrieve a new link in your email!
            </p>
          ) : (
            <>
              <p className="leading-relaxed mb-6">
                Forgot your password? No worries! Use the form below to set a
                new one.
              </p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ShareRecipe;
