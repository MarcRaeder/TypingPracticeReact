import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { TextService } from "../Services/TextService";
import { TextLengthInput } from "./TextLengtInput";
import { TypingField } from "./TypingField";
import { TextRepository } from "../Repositories/TextRepository";

export function TypingArea() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(5);
  const [textService, setTextService] = useState(new TextService(new TextRepository()));
  useEffect(() => {
    textService.GenerateNewText(textLength).then((response) => setText(response));
  }, []);

  return (
    <div className="typing-area">
      <h1 className="typing-area__header ">Typing 100</h1>
      <TextLengthInput setTextLength={setTextLength} />
      <TypingField text={text} />
      <div className="typing-area__buttonLine">
        <Button text="Reset Run" />
        <Button
          text="Generate New Text"
          onClick={() => {
            textService.GenerateNewText(textLength).then((response) => setText(response));
          }}
        />
      </div>
      <div className="typing-area__buttonLine">
        <Button text="Delete Todays Data" />
        <Button text="Delete All Data" />
      </div>
    </div>
  );
}
