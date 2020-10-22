import Head from "next/head";

import PageHeading from "../components/PageHeading";

const Home = () => {
  return (
    <>
      <Head>
        <title>GroceryTime | Roadmap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container p-10 flex flex-col item-center max-w-full">
        <PageHeading title="Roadmap" />

        <p className="leading-relaxed mb-6">
          GroceryTime is in active development with new features and
          improvements being worked on all the time. Here's some of the things
          I'm working on currently:
        </p>

        <h3 className="text-2xl my-6">#1. Meal Planning</h3>

        <p className="leading-relaxed mb-6">
          A big part of grocery shopping is planning meals for the week. I'm
          working on a meal planning feature which will allow you to do just
          that. You'll be able to add meals that coordinate with a given grocery
          trip (i.e. your meals for the week), assign items in your grocery
          lists to meals, view a beautiful dashboard of all the meals you've
          added, and more.
        </p>

        <h3 className="text-2xl my-6">#2. Notifications</h3>

        <p className="leading-relaxed mb-6">
          GroceryTime will support push notifications. You'll be able to get
          notified when those you've shared your store lists with have added or
          updated items, and more.
        </p>

        <h3 className="text-2xl my-6">#3. Default Store Setting</h3>

        <p className="leading-relaxed mb-6">
          New settings will be added to allow you to set any of your stores as
          the default, so that it will always be displayed when you open
          GroceryTime. This will also allow you to leave off the store name when
          using Siri to add items, e.g. "Add Apples to my list in GroceryTime"
          instead of "Add Apples to my Quick-E-Mart list in GroceryTime".
        </p>

        <p className="leading-relaxed my-6 text-gray-800 dark:text-gray-600">
          ...and more!
        </p>
      </div>
    </>
  );
};

export default Home;
