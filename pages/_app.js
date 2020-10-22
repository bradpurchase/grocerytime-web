import "../styles/globals.css";

import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
