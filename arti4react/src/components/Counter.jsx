import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          if (counter == 0) return;
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
