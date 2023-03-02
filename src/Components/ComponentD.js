import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      componentD - {countContext.CountContext}
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

export default ComponentD;
