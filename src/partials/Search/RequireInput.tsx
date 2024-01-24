const RequireInput = ({ inputValueLength }: { inputValueLength: number }) => {
  return (
    <section
      id="section__search__require__input"
      className={`container-padding mt-2 text-xs ${
        inputValueLength > 0 && inputValueLength < 4 ? "block" : "hidden"
      }`}
    >
      Require input {inputValueLength}/4
    </section>
  );
};

export default RequireInput;
