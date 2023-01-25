import React from "react";

export function TextLengthInput(props) {
  return (
    <div className="typing-area__text-length">
      Text Length
      <input
        type="number"
        min={1}
        max={100}
        placeholder="1-100"
        onChange={(event) => props.setTextLength(event.currentTarget.value)}
      />
    </div>
  );
}
