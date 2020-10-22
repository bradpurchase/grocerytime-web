import Head from "next/head";
import Link from "next/link";

import PageHeading from "../components/PageHeading";

const Home = () => {
  return (
    <>
      <Head>
        <title>GroceryTime: Roadmap</title>
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
          A big part of grocery shopping is planning out meals for the week. I'm
          working on a feature which will allow you to do just that within the
          app. You'll be able to add meals that coordinate with a given grocery
          trip (i.e. your meals for the week), associate items in your grocery
          lists with meals, and see an overview of all the meals you've added.
        </p>

        <h3 className="text-2xl my-6">#2. Push Notifications</h3>

        <p className="leading-relaxed mb-6">
          GroceryTime will support push notifications. You'll be able to get
          notified when someone adds or updates items in your grocery lists, and
          more.
        </p>

        <h3 className="text-2xl my-6">#3. Default Store Setting</h3>

        <p className="leading-relaxed mb-6">
          A setting will be added to allow you to set one of your stores the
          default, so that it will always be displayed when you open
          GroceryTime. This will also allow you to leave off the store name when
          using Siri to add items, e.g. "Add Apples to my list in GroceryTime"
          instead of "Add Apples to my Quick-E-Mart list in GroceryTime".
        </p>

        <p className="leading-relaxed my-6 text-gray-800 dark:text-gray-600">
          ...and more!
        </p>

        <p className="leading-relaxed my-6 font-bold">
          Is there something you'd like to see in GroceryTime? I'm all ears!
          Email{" "}
          <Link href="mailto:feedback@grocerytime.app">
            feedback@grocerytime.app
          </Link>
        </p>
      </div>
    </>
  );
};

export default Home;
