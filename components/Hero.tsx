import * as React from "react";
import Link from "next/link";

const Hero = React.memo(() => {
  return (
    <div className="px-20 pt-12 pb-2">
      <div className="mb-8 flex w-full justify-center">
        <Link href="/">
          <img src="/images/Icon.svg" className="h-20" />
        </Link>
      </div>
      <div className="flex flex-col text-center items-center">
        <h1 className="text-gray-900 dark:text-gray-200 text-4xl font-bold leading-tight mb-4">
          GroceryTime
        </h1>
        <h2 className="text-gray-800 dark:text-gray-100 text-3xl leading-tight mb-8">
          Your new grocery store companion.
        </h2>

        <Link href="https://apps.apple.com/app/id1526291340">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto"
          >
            Download
          </a>
        </Link>
        <small className="text-gray-700 text-sm mt-4">
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
