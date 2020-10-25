import Head from "next/head";

import PageHeading from "../components/PageHeading";

const Home = () => {
  return (
    <>
      <Head>
        <title>GroceryTime: About</title>
      </Head>

      <div className="container p-10 flex flex-col">
        <PageHeading title="About GroceryTime" />

        <p className="leading-relaxed mb-6">
          GroceryTime is a collaborative grocery list app that allows you to
          plan and organize your shopping with anyone you share a household
          with.
        </p>

        <p className="leading-relaxed mb-6">
          This app is developed in Montreal by me, Brad Purchase. I'm a
          developer who saw a need for a fast and modern grocery list app with a
          beautiful interface and powerful features.
        </p>

        <p className="leading-relaxed">
          I decided to build this during the COVID-19 lockdown of 2020. What
          started as a quarantine project took a while new life and, after a ton
          of work, I'm pretty proud of this app and I really hope you like it!
        </p>

        <h3 className="text-2xl mt-10 mb-6">Credits</h3>

        <p className="leading-relaxed mb-6">
          GroceryTime uses the following open source software:
        </p>

        <ul className="list-disc mx-6">
          <li className="mb-2">
            <a
              className="text-red-600"
              href="https://github.com/apollographql/apollo-ios"
              target="_blank"
              rel="noreferrer noopener"
            >
              Apollo
            </a>
          </li>
          <li className="mb-2">
            <a
              className="text-red-600"
              href="https://github.com/siteline/SwiftUI-Introspect"
              target="_blank"
              rel="noreferrer noopener"
            >
              SwiftUI-Introspect
            </a>
          </li>
          <li>
            <a
              className="text-red-600"
              href="https://github.com/evgenyneu/keychain-swift"
              target="_blank"
              rel="noreferrer noopener"
            >
              keychain-swift
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
