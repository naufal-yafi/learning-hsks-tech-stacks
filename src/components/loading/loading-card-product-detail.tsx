export default function LoadingCardProductDetail() {
  return (
    <>
      <div
        id="btn__back__home"
        className="h-8 w-20 mb-5 animate-pulse btn loading__background__outline"
      ></div>

      <div
        id="loading__card__product__detail"
        className="cardproduct_detail_container animate-pulse"
      >
        <figure className="h-[250px] lg:h-[450px] cardproduct_detail_figure loading__background"></figure>

        <figcaption className="cardproduct_detail_figcaption">
          <div className="w-full h-4 mt-3 loading__text"></div>

          <div className="space-y-3 mt-4 w-full">
            <div className="grid grid-cols-3 gap-4">
              <div className="loading__text"></div>
              <div className="loading__text col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="loading__text col-span-1"></div>
              <div className="loading__text"></div>
            </div>

            <div className="loading__text"></div>
          </div>
          <div className="w-2/5 col-span-0 mt-4 loading__text"></div>

          <div className="h-8 mt-5 w-full btn loading__background__outline"></div>
        </figcaption>
      </div>
    </>
  );
}
