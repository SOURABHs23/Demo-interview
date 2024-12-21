import React, { useState } from "react";

const Sample = () => {
  const [v, setV] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function inputf(e) {
    // console.log(e);
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  const add = () => {
    if (Number(inputValue)) {
      console.log(inputValue);
      setV(v + Number(inputValue));
    } else setV((prev) => prev + 1);
  };

  const sub = () => {
    setV((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{v}</h1>
      <input type="number" value={inputValue} onChange={(e) => inputf(e)} />
      <button className="m-5" onClick={add}>
        add
      </button>
      <button onClick={sub}>sub</button>
    </div>
  );
};

export default Sample;
