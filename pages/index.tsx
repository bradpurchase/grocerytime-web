import Head from "next/head";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  return (
    <>
      <Head>
        <title>GroceryTime: Shared Grocery List App for iPhone and iPad</title>
      </Head>

      <Hero />

      <Feature
        heading="Get organized with your grocery shopping. Together."
        body={
          <>
            <p>
              GroceryTime is perfectly tailored to your shopping habits, giving
              you separate lists for each trip to the store. It keeps you
              organized, whether you shop for groceries every day or once per
              week.
            </p>

            <p className="mt-8">
              GroceryTime was also built with sharing in mind. Share your
              grocery lists with your spouse, roommates - heck, anyone - and
              plan your groceries together.
            </p>
          </>
        }
        imageName="StoreView"
        imagePos="left"
      />

      <Feature
        heading="Make grocery planning a non-issue."
        body={
          <>
            <p>
              Every grocery list app allows you to add items to a list and check
              them off as you find them at the store. But your weekly grocery
              shopping can be an unorganized, annoying mess if you're not
              organized &mdash; that's where GroceryTime comes in.
            </p>
            <p className="mt-8">
              You most likely buy similar items each time you go to the store,
              so it should be easy to view your past trips and add items to your
              current trip to make building your list easier. Trip History is
              just one of the many features built into GroceryTime that make
              planning your grocery trip so much easier.
            </p>
          </>
        }
        imageName="ViewTripHistory"
        imagePos="right"
      />

      <Feature
        heading="Meal planning made easy."
        body={
          <>
            <p>
              Buying food at the supermarket is only one part of the equation
              when it comes to grocery shopping. The other very important part
              of it is meal planning, which you'll be happy to learn GroceryTime
              has built right in!
            </p>
            <p className="mt-8">
              Plan meals for each week in your Meals tab and share them with
              anyone you've shared your grocery lists with. Your Meals tab
              contains a beautiful calendar which allows you to jump between
              weeks and view your entire history of meals planned.
            </p>
          </>
        }
        imageName="Meals"
        imagePos="left"
      />

      <div
        className={`container bg-red-600 dark:bg-black max-w-full px-8 py-20 flex flex-col item-center`}
      >
        <div className="flex flex-col text-center items-center">
          <h2 className="text-white text-3xl font-bold mb-12">
            Fits right in on your iPhone and iPad.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-0 sm:mx-10">
            <div className="text-white leading-loose text-left mb-2 sm:mb-0">
              <h3 className="text-2xl font-bold">Siri Support</h3>
              <p className="text-lg">
                Voice control is a "must-have" when planning groceries. As you
                take inventory in your kitchen while grocery planning, use
                GroceryTime's built-in Siri support to add items to store lists.
                You can even use Siri to mark items as completed as you find
                them at the store!
              </p>
            </div>
            <div className="text-white leading-loose text-left">
              <h3 className="text-2xl font-bold">Split Screen on iPad</h3>
              <p className="text-lg">
                GroceryTime supports the split-screen feature on iPadOS. Place
                the app on one side of your iPad screen while you browse recipe
                sites or discuss groceries with your partner in Messages on the
                other. The app works and looks great at any screen size!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center my-10 px-10">
        <DownloadButton />
      </div>
    </>
  );
};

export default Home;
