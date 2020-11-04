import * as React from "react";
import Link from "next/link";

const Footer = React.memo(() => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="container flex items justify-between flex-wrap bg-white dark:bg-black max-w-full mx-auto px-8 py-10">
      <div className="flex text-black dark:text-white leading-loose">
        GroceryTime is designed and developed in Montreal. Copyright © {year}{" "}
        Brad Purchase
      </div>
      <ul className="flex mt-4 md:mt-0">
        <li className="mr-8">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-8">
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li className="">
          <Link href="mailto:support@groceryti.me">Support</Link>
        </li>
      </ul>
    </div>
  );
});

export default Footer;
