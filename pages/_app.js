import "../styles/globals.css";

import Head from "next/head";

import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
