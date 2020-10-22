const Feature = React.memo(
  ({ heading, body, imageName, imagePos = "left", bgColor }) => {
    return (
      <div
        className={`container ${bgColor} dark:bg-black max-w-full px-8 py-20 flex flex-col item-center`}
      >
        <div className="flex flex-col text-center items-center">
          <div className="max-w-4xl flex items-center flex-col-reverse lg:flex-row">
            {imagePos == "left" ? (
              <>
                <picture className="object-fit mt-10 lg:mt-0 lg:mr-16 w-full">
                  <source
                    srcSet={`/images/${imageName}-dark.png`}
                    media="(prefers-color-scheme: dark)"
                  />
                  <img src={`/images/${imageName}.png`} />
                </picture>
                <div
                  className={`${
                    bgColor == "bg-white"
                      ? "text-black dark:text-white"
                      : "text-white"
                  } text-left w-full`}
                >
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    {heading}
                  </h2>
                  <div className="text-xl leading-relaxed">{body}</div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${
                    bgColor == "bg-white dark:bg-black"
                      ? "text-black"
                      : "text-white"
                  }
                   text-left w-full`}
                >
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    {heading}
                  </h2>
                  <div className="text-xl leading-relaxed">{body}</div>
                </div>
                <picture className="object-fit mb-10 lg:mb-0 lg:ml-16 w-full">
                  <source
                    srcSet={`/images/${imageName}-dark.png`}
                    media="(prefers-color-scheme: dark)"
                  />
                  <img src={`/images/${imageName}.png`} />
                </picture>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Feature;
