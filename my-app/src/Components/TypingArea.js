import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { TextService } from "../Service/TextService";
import { TextLengthInput } from "./TextLengtInput";
import { TypingField } from "./TypingField";
import { TextRepository } from "../Repository/TextRepository";

export function TypingArea() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(5);
  const [textService, setTextService] = useState(new TextService(new TextRepository()));
  useEffect(() => {
    console.log(textService);
    textService.GenerateNewText(textLength).then((response) => setText(response));
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
          onClick={() => {
            textService.GenerateNewText(textLength).then((response) => setText(response));
          }}
        />
      </div>
      <div className="TypingArea__ButtonLine">
        <Button text="Delete Todays Data" />
        <Button text="Delete All Data" />
      </div>
    </div>
  );
}
