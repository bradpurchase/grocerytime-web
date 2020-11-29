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

        <h3 className="text-2xl my-6">#2. Push Notifications</h3>

        <p className="leading-relaxed mb-6">
          GroceryTime will support push notifications. You'll be able to get
          notified when someone adds or updates items in your grocery lists, and
          more.
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
