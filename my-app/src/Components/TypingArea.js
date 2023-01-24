import React from "react";
import { Button } from "./Button";
import { Game } from "./Game";
import { TextLengthInput } from "./TextLengthInput";

export function TypingArea() {
  return (
    <div className="TypingArea">
      <h1 className="TypingArea__Header ">Typing 100</h1>
      <TextLengthInput />
      <Game text="coming soon..." />
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
