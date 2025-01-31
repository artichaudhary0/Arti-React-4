import React, { useState } from "react";

function ChangeBackground() {
  const [color, setColor] = useState("lightgrey");

  return (
    <div style={{ backgroundColor: color, padding: "50px" }}>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("black")}>Black</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("orange")}>Orange</button>
    </div>
  );
}

export default ChangeBackground;
