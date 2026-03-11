import * as React from "react";
import Link from "next/link";

interface Props {
  message: string;
  href?: string;
  linkLabel?: string;
}

const SunsetBanner: React.FC<Props> = React.memo(
  ({ message, href, linkLabel }) => {
    const hasLink = Boolean(href && linkLabel);

    return (
      <div className="bg-red-600 px-6 py-3 text-white sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm font-medium sm:text-base">
          <span>{message}</span>
          {hasLink && (
            <Link href={href as string} passHref>
              <a
                href={href}
                className="font-semibold text-white underline underline-offset-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                {linkLabel}
              </a>
            </Link>
          )}
        </div>
      </div>
    );
  }
);

export default SunsetBanner;
