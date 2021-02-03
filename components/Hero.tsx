import * as React from "react";
import Link from "next/link";

const Hero = React.memo(() => {
  return (
    <div className="px-10 pt-12">
      <div className="flex flex-col md:flex-row w-full justify-center text-center md:text-left mb-8 md:mb-12">
        <div className="flex flex-col justify-center mx-auto md:mx-0">
          <Link href="/">
            <img src="/images/icon.png" className="h-20 rounded-xl" />
          </Link>
        </div>
        <div className="flex flex-col my-4 md:my-0 md:ml-6">
          <h1 className="text-gray-900 dark:text-gray-200 text-3xl font-bold">
            GroceryTime
          </h1>
          <h2 className="text-gray-800 dark:text-gray-100 text-2xl">
            Your new grocery store companion.
          </h2>
        </div>
      </div>
      <div className="flex flex-col text-center items-center">
        <Link href="https://apps.apple.com/app/id1526291340">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto"
          >
            Download
          </a>
        </Link>
        <small className="text-gray-700 dark:text-gray-200 text-sm mt-4">
          <strong>Free</strong> on the App Store
          <br />
          for iOS and iPadOS 14+
        </small>

        <div className="mt-8">
          <Link href="https://www.producthunt.com/posts/grocerytime?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-grocerytime">
            <a target="_blank">
              <img
                className="dark:hidden"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=278188&theme=light"
                alt="GroceryTime - Share grocery lists. Your new grocery store companion. | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
              <img
                className="hidden dark:block"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=278188&theme=dark"
                alt="GroceryTime - Share grocery lists. Your new grocery store companion. | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Hero;
