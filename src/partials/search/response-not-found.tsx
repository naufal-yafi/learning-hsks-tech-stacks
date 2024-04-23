const ResponseNotFound = ({ clearFunction }: { clearFunction: () => void }) => {
  return (
    <div id="search__response__not__found">
      <h1 className="text-xl">Not Found</h1>
      <p className="text-xs mt-2">
        Press{" "}
        <button
          className="px-2 mx-1 rounded-sm bg-black text-white"
          onClick={clearFunction}
        >
          DELETE
        </button>{" "}
        to clear search.
      </p>
    </div>
  );
};

export default ResponseNotFound;
