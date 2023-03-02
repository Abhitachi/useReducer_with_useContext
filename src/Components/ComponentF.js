import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      componentF - {countContext.CountContext}
      <button onClick={() => countContext.dispatchContext("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatchContext("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatchContext("reset")}>
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
