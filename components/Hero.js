import Link from "next/link";

const Hero = React.memo(() => {
  return (
    <div className="px-20 py-12 bg-white">
      <div className="mb-8 flex w-full justify-center">
        <Link href="/">
          <img src="/images/Icon.svg" className="h-20" />
        </Link>
      </div>
      <div className="flex flex-col text-center items-center">
        <h1 className="text-gray-900 text-4xl font-bold leading-tight mb-4">
          GroceryTime
        </h1>
        <h2 className="text-gray-800 text-3xl leading-tight mb-8">
          Your new grocery store companion.
        </h2>

        <button
          disabled
          class="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto"
        >
          Coming soon 👀
        </button>
        <small class="text-gray-500 text-sm mt-4">for iOS and iPadOS 14+</small>
      </div>
    </div>
  );
});

export default Hero;
