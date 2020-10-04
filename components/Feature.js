const Feature = React.memo(({ heading, body, imageName, bgColor }) => {
  return (
    <div
      className={`container ${bgColor} max-w-full px-8 py-20 flex flex-col item-center`}
    >
      <div className="flex flex-col text-center items-center">
        <div className="max-w-4xl flex items-center flex-col-reverse lg:flex-row">
          <img
            src={`/images/${imageName}.svg`}
            class="object-fit mt-10 lg:mt-0 lg:mr-16 w-full md:w-1/3"
          />
          <div className="text-white text-left">
            <h2 className="text-4xl font-bold mb-8 leading-tight">{heading}</h2>
            <div className="text-xl leading-relaxed">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Feature;
