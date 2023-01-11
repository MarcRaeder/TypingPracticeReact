import React from "react";
import { Game } from "./Game";

export function TypingField(props) {
  return (
    <div className="TypingArea__Text">
      <Game text={props.text} />
    </div>
  );
}
