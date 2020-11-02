import "../styles/globals.css";

import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col item-center max-w-full justify-between">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script
            async
            defer
            data-website-id="fe82d042-84f4-44c3-8359-d809bd599144"
            src="https://umami-8j4la46es.vercel.app/umami.js"
          ></script>
        </Head>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
