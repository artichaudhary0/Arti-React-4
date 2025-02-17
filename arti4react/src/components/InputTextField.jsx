import React, { useState } from "react";

function InputTextField() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed text : {text}</p>
    </div>
  );
}

export default InputTextField;
