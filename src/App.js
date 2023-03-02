import React, { useReducer } from "react";
import "./styles.css";

import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

//Aim is to maintain count in app and modify its state from comp A D E F
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ CountContext: count, dispatchContext: dispatch }}
    >
      <div className="App">
        <div>count-{count}</div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}
