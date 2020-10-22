import Link from "next/link";

const PageHeading = React.memo(({ title }) => (
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
