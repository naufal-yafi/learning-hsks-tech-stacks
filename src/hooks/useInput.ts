import React from "react";

const useInput = (): {
  inputValue: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: boolean;
  clearInput: () => void;
  handleDeleteKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
} => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [clear, setClear] = React.useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const handleDeleteKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Delete") {
      clearInput();
    }
  };

  React.useEffect(() => {
    setClear(inputValue !== "");
  }, [inputValue]);

  return {
    inputValue,
    handleInput,
    clear,
    clearInput,
    handleDeleteKey,
  };
};

export default useInput;
