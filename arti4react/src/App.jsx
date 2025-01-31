import React, { useState } from "react";
import Counter from "./components/Counter";
import ChangeHeading from "./components/ChangeHeading";
import ToggleButton from "./components/ToggleButton";
import InputTextField from "./components/InputTextField";
import ShowHideText from "./components/ShowHideText";
import ChangeBackground from "./components/ChangeBackground";
import MouseEvent from "./components/MouseEvent";
import DoubleClick from "./components/DoubleClick";

function App() {
  return (
    <>
      <ChangeHeading />
      <hr />
      <Counter />
      <hr />
      <ToggleButton />
      <hr />
      <InputTextField />
      <hr />
      <ShowHideText />
      <hr />
      <ChangeBackground />

      <hr />
      <MouseEvent />
      <hr />
      <DoubleClick />
    </>
  );
}

export default App;
