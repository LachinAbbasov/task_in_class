
import { useState } from "react";
import "./App.css"
function  App ()  {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter((prevState) => --prevState);
          }
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(++counter);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
    
    </>
  );
}

export default App
