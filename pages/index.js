import Head from "next/head";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <>
      <Head>
        <title>GroceryTime: Shared Grocery List App for iPhone and iPad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />

      <Feature
        heading="Organize your grocery shopping"
        body={
          <>
            <p>
              Plan each trip to the grocery store separately, whether you shop
              for groceries every day or once per week.
            </p>
            <p className="mt-8">
              You can even view your past trips to recall items back into your
              shopping list, and get a summary of your trip when you're done
              shopping.
            </p>
            <p className="mt-8">
              And, for those times when you didn't find everything you needed,
              GroceryTime allows you to move those items right over to your next
              trip.
            </p>
          </>
        }
        imageName="StoreView"
        bgColor="bg-red-600"
      />

      <Feature
        heading="Share and plan together"
        body={
          <>
            <p>
              Invite anyone by email address and plan your groceries together in
              a shared list. It's that simple.
            </p>
          </>
        }
        imageName="ShareView"
        imagePos="right"
        bgColor="bg-black"
      />
    </>
  );
};

export default Home;
