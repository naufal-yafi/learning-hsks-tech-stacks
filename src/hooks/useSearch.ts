import { useState } from "react";

const useSearch = (): {
  show: boolean;
  handleShow: () => void;
} => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return {
    show,
    handleShow,
  };
};

export default useSearch;
