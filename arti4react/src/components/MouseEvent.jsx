import React, { useState } from "react";

function MouseEvent() {
  const [bgColor, setBgColor] = useState("violet");

  const handleMouseEventOver = () => {
    setBgColor("lightblue");
  };

  const handleMouseOut = () => {
    setBgColor("violet");
  };

  return (
    <div
      style={{ width: "200px", height: "200px", backgroundColor: bgColor }}
      onMouseOver={handleMouseEventOver}
      onMouseOut={handleMouseOut}
    >
      Hover over me!!!
    </div>
  );
}

export default MouseEvent;
