import React from "react";
export function TextLengthInput(props) {
  return (
    <div className="TypingArea__TextLength">
      Text Length
      <input type="number" min={1} max={100} placeholder="1-100" />
    </div>
  );
}
