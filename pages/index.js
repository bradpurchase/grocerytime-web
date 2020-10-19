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
        heading="Organize your grocery shopping."
        body={
          <>
            <p>
              GroceryTime is perfectly tailored to your shopping habits, giving
              you separate lists for each trip to the store. It keeps you
              organized, whether you shop for groceries every day or once per
              week.
            </p>

            <p className="mt-8">
              After a shopping trip, you see a helpful summary of the items you
              picked up and which ones you couldn't find. For those times when
              you didn't find everything you needed, GroceryTime allows you to
              move those items right over to your next trip.
            </p>
          </>
        }
        imageName="StoreView"
        imagePos="left"
        bgColor="bg-red-600"
      />

      <Feature
        heading="Make grocery planning a non-issue."
        body={
          <>
            <p>
              Every grocery list app allows you to add items to a list and check
              them off as you find them at the store. But grocery shopping is
              different than a to-do list.
            </p>
            <p className="mt-8">
              You most likely buy similar items each time you go to the store,
              so it should be easy to view your past trips and add items to your
              current trip to make building your list easier.
            </p>
            <p className="mt-8">
              Trip History is just one of the many features built into
              GroceryTime that make planning your grocery trip so much easier.
            </p>
          </>
        }
        imageName="ViewTripHistory"
        imagePos="right"
        bgColor="bg-black"
      />

      <Feature
        heading="Shop smarter. Together."
        body={
          <>
            <p>
              GroceryTime was built to make sharing simple. Share your grocery
              lists with your spouse, roommates - heck, anyone - and plan your
              groceries together.
            </p>
            <p className="mt-8">
              Simply enter the email address of the person you'd like to add,
              and that's it. The person will receive an email with a link
              allowing them to join you, and once they do, you can both see the
              list, add items and check things off as you find them at the
              store!
            </p>
          </>
        }
        imageName="ShareStoreView"
        imagePos="left"
        bgColor="bg-green-500"
      />
    </>
  );
};

export default Home;
