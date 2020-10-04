import Link from "next/link";

const Hero = React.memo(() => {
  return (
    <div className="px-20 py-12 bg-white">
      <div className="mb-10 flex w-full text-center justify-center">
        <Link href="/">
          <img src="/images/Icon.svg" className="h-20" />
        </Link>
      </div>
      <div className="flex flex-col text-center items-center">
        <h1 className="text-gray-900 text-4xl font-bold leading-tight mb-4">
          GroceryTime
        </h1>
        <h2 className="text-gray-800 text-3xl leading-tight mb-10">
          Your new grocery store companion.
        </h2>
        <button
          disabled
          class="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto"
        >
          Coming very soon 👀
        </button>
      </div>
    </div>
  );
});

export default Hero;
