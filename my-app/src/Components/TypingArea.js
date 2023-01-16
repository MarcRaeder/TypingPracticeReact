import React from "react";
import { Button } from "./Button";
import { TextLengthInput } from "./TextLengthInput";
import { TypingField } from "./TypingField";

export function TypingArea() {
  return (
    <div className="TypingArea">
      <h1 className="TypingArea__Header ">Typing 100</h1>
      <TextLengthInput />
      <TypingField />
      <div className="TypingArea__ButtonLine">
        <Button text="Reset Run" />
        <Button text="Generate New Text" />
      </div>
      <div className="TypingArea__ButtonLine">
        <Button text="Delete Todays Data" />
        <Button text="Delete All Data" />
      </div>
    </div>
  );
}
