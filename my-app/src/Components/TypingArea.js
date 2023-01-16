import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { GenerateNewText } from "./GenerateNewText";
import { TextLengthInput } from "./TextLengtInput";
import { TypingField } from "./TypingField";

export function TypingArea() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(5);
  useEffect(() => {
    GenerateNewText(textLength).then((response) => setText(response));
  }, []);

  return (
    <div className="TypingArea">
      <h1 className="TypingArea__Header ">Typing 100</h1>
      <TextLengthInput setTextLength={setTextLength} />
      <TypingField text={text} />
      <div className="TypingArea__ButtonLine">
        <Button text="Reset Run" />
        <Button
          text="Generate New Text"
          onClick={() => GenerateNewText(textLength).then((response) => setText(response))}
        />
      </div>
    </div>
  );
}
