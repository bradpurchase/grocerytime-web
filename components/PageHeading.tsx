import * as React from 'react'
import Link from "next/link";

interface Props {
  title: String
}

const PageHeading: React.FC<Props> = React.memo(({ title }: Props) => (
  <>
    <div className="mb-8 flex w-full">
      <Link href="/">
        <img src="/images/Icon.svg" className="h-16" />
      </Link>
    </div>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
  </>
));

export default PageHeading;
