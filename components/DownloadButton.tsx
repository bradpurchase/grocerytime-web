import * as React from "react";
import Link from "next/link";

const DownloadButton = React.memo(() => (
  <Link href="https://apps.apple.com/app/id1526291340">
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto"
    >
      Download on the App Store
    </a>
  </Link>
));

export default DownloadButton;
