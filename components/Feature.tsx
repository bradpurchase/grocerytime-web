import * as React from "react";

interface Props {
  heading: String;
  body: React.ReactNode;
  imageName: String;
  imagePos?: String;
}

const Feature: React.FC<Props> = React.memo(
  ({ heading, body, imageName, imagePos = "left" }) => {
    return (
      <div
        className={`container bg-white dark:bg-black max-w-full px-8 py-20 flex flex-col item-center`}
      >
        <div className="flex flex-col text-center items-center">
          <div
            className={`max-w-4xl flex items-center flex-col-reverse ${
              imagePos == "left" ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <picture className="object-fit mt-10 lg:mt-0 lg:mr-16 w-full">
              <source
                srcSet={`/images/${imageName}-dark.png`}
                media="(prefers-color-scheme: dark)"
              />
              <img src={`/images/${imageName}.png`} />
            </picture>
            <div
              className={`"text-black dark:text-white" text-left w-full ${
                imagePos == "left" ? "lg:ml-16" : "lg:mr-16"
              }`}
            >
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {heading}
              </h2>
              <div className="text-xl leading-relaxed">{body}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Feature;
