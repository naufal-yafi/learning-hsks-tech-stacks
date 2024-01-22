const LoadingCardProduct = () => {
  return (
    <div className="w-full border-b border-r border-black">
      <figure className="animate-pulse h-[220px] w-full bg-neutral-400 border-b border-black"></figure>

      <figcaption className="animate-pulse px-5 py-5">
        <div className="h-4 bg-neutral-400 rounded-full col-span-2 mt-3"></div>

        <div className="space-y-3 mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-neutral-400 rounded col-span-2"></div>
            <div className="h-2 bg-neutral-400 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-neutral-400 rounded"></div>
        </div>

        <div className="flex flex-row items-center gap-3 mt-5">
          <button className="btn bg-neutral-400 border-slate-400 h-6 w-8 px-0"></button>
          <button className="btn bg-neutral-400 border-slate-400 h-8 w-20"></button>
        </div>
      </figcaption>
    </div>
  );
};

export default LoadingCardProduct;
