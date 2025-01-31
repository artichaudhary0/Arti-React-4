import React, { useState } from "react";

function DoubleClick() {
  const [scale, setScale] = useState(1);
  const [buttonText, setButtonText] = useState("Double Clicked");

  const handleDoubleClick = () => setButtonText("chup ho jayo dono");

  return (
    <div style={{ transform: scale }}>
      <button
        onDoubleClick={() => {
          handleDoubleClick();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DoubleClick;
