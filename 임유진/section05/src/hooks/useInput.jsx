import { useState } from "react";

function useInput() {
  //use 붙이면 커스텀 훅으로 인식
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
