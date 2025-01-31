import React from "react";
import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h2>{isOn ? "On" : "Off"}</h2>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
}

export default ToggleButton;
