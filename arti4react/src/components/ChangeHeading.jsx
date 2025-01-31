import React from "react";
import { useState } from "react";

function ChangeHeading() {
  const [heading, setHeading] = useState("This is my heading");
  const [state, setState] = useState("This is my heading");

  const changeHeading = () => {
    setState("Second Heading");
    setHeading("Second heading");
    alert(heading);
  };

  return (
    <>
      <h1>{state}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
        architecto necessitatibus culpa impedit sequi harum omnis tempore illo
        delectus laborum!
      </p>
      <button onClick={changeHeading}>Change heading</button>
    </>
  );
}

export default ChangeHeading;
