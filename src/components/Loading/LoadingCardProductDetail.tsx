const LoadingCardProductDetail = () => {
  return (
    <>
      <button className="animate-pulse btn bg-neutral-400 border-slate-400 h-8 w-20 mb-5"></button>

      <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2">
        <figure className="w-full lg:w-[450px] h-[450px] overflow-hidden mb-5 bg-neutral-400"></figure>

        <figcaption className="flex flex-col items-start w-full">
          <div className="h-4 bg-neutral-400 rounded-full col-span-2 mt-3 w-full"></div>

          <div className="space-y-3 mt-4 w-full">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-neutral-400 rounded col-span-2"></div>
              <div className="h-2 bg-neutral-400 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-neutral-400 rounded col-span-1"></div>
              <div className="h-2 bg-neutral-400 rounded col-span-2"></div>
            </div>

            <div className="h-2 bg-neutral-400 rounded"></div>
          </div>
          <div className="h-2 w-20 mt-4 bg-neutral-400 rounded col-span-1"></div>

          <button className="btn bg-neutral-400 border-slate-400 h-8 mt-5 w-full"></button>
        </figcaption>
      </div>
    </>
  );
};

export default LoadingCardProductDetail;
