import { useEffect, useState } from "react";

const useInput = (): {
  inputValue: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: boolean;
  clearInput: () => void;
} => {
  const [inputValue, setInputValue] = useState<string>("");
  const [clear, setClear] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  useEffect(() => {
    setClear(inputValue !== "");
  }, [inputValue]);

  return {
    inputValue,
    handleInput,
    clear,
    clearInput,
  };
};

export default useInput;
