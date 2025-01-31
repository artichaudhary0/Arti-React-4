import React, { useState } from "react";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is some Text!</p>}
    </div>
  );
}

export default ShowHideText;
