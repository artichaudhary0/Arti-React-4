import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // let heading = "This is my heading";

  const [heading, setHeading] = useState("This is my heading");
  const [state, setState] = useState("This is my heading");

  function changeHeading() {
    // heading = "Second heading";

    // state ="second heading"
    setState("Second Heading");

    setHeading("Second heading");

    alert(heading);
  }

  return (
    <>
      <h1>{state}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
        architecto necessitatibus culpa impedit sequi harum omnis tempore illo
        delectus laborum!
      </p>
      <button
        onClick={() => {
          changeHeading();
        }}
      >
        Change heading
      </button>
      <Counter />
    </>
  );
}

export default App;
