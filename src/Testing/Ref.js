import React, { useState, useRef } from "react";

export const Ref = () => {
  let variableCounter = 0; // Regular variable
  const refCounter = useRef(0); // Ref variable
  const [stateCounter, setStateCounter] = useState(0); // State variable

  const increment = () => {
    variableCounter++;
    refCounter.current++;
    setStateCounter(stateCounter + 1);
    console.log("Variable Counter:", variableCounter);
    console.log("Ref Counter:", refCounter.current);
  };

  return (
    <div>
      <p>State Counter: {stateCounter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
