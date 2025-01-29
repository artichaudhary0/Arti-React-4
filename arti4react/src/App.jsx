import { useState } from "react";

function App() {
  const [state, setState] = useState({ counter: 0, counterName: "Increase" });
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{state.counter}</div>
      <button
        onClick={() => {
          // mutable
          // state.counter = state.counter + 1;
          // console.log(state.counter);
          // console.log(state);
          // setState(state);

          
          // im-mutable
          setState.counter;
          setState({ ...state, counter: state.counter + 1 });
        }}
      >
        Increment
      </button>

      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment2
      </button>
    </>
  );
}

export default App;
