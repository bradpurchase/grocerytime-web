import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import PageHeading from "../components/PageHeading";
import PageContainer from "../components/PageContainer";

const Home = React.memo(() => {
  return (
    <>
      <Head>
        <title>GroceryTime: Roadmap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PageContainer>
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

        <h3 className="text-2xl my-6">#2. Widgets</h3>

        <p className="leading-relaxed mb-6">
          Several users have expressed interest in home screen widgets for
          GroceryTime on iOS 14. I think this would be great, too! I've started
          working on a widget to view your current trip in a store, and another
          to provide quick links to your stores.
        </p>

        <h3 className="text-2xl my-6">#3. Item Categorization Improvements</h3>

        <p className="leading-relaxed mb-6">
          I'd like to make the item categorization a lot better. Still far too
          many items are getting categorized as "Misc.", so I'm going to be
          overhauling how this works to make it a lot smarter.
        </p>

        <p className="leading-relaxed my-6 text-gray-800 dark:text-gray-600">
          ...and more!
        </p>

        <p className="leading-relaxed my-6 font-bold">
          Is there something you'd like to see in GroceryTime? I'm all ears!
          Email{" "}
          <Link href="mailto:feedback@groceryti.me">feedback@groceryti.me</Link>
        </p>
      </PageContainer>
    </>
  );
});

export default Home;
