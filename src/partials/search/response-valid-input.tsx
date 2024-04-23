import ResponseNotFound from "./response-not-found";

const ResponseValidInput = ({
  inputValueLength,
  isNotFind,
  isLoading,
  clearFunction,
}: {
  inputValueLength: number;
  isNotFind: boolean;
  isLoading: boolean;
  clearFunction: () => void;
}) => {
  return (
    <section
      id="section__search__response__valid__input"
      className={`container-padding text-center my-8 ${
        inputValueLength > 3 && isNotFind ? "block" : "hidden"
      }`}
    >
      {isLoading ? (
        <h1 className="text-xs">Please wait..</h1>
      ) : (
        <ResponseNotFound clearFunction={clearFunction} />
      )}
    </section>
  );
};

export default ResponseValidInput;
