const LoadingCardProduct = () => {
  return (
    <div id="loading__card__product" className="cardproduct__container">
      <figure className="animate-pulse cardproduct__figure loading__background"></figure>

      <figcaption className="animate-pulse cardproduct__figcaption">
        <div className="h-4 mt-3 loading__text"></div>

        <div className="space-y-3 mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="loading__text"></div>
            <div className="loading__text col-span-1"></div>
          </div>
          <div className="loading__text"></div>
        </div>

        <div className="cardproduct__footer">
          <button className="h-6 w-8 px-0 btn loading__background__outline"></button>
          <button className="h-8 w-20 btn loading__background__outline"></button>
        </div>
      </figcaption>
    </div>
  );
};

export default LoadingCardProduct;
