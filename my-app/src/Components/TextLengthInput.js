import React from "react";
export function TextLengthInput(props) {
  return (
    <div className="TypingArea__TextLength">
      Text Length
      <input
        type="number"
        min={1}
        max={100}
        placeholder="Only 1 - 100 words allowed!"
        onChange={(event) => props.setTextLength(event.currentTarget.value)}
        style={{ width: "180px" }}
      />
    </div>
  );
}
