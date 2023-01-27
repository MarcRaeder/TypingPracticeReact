import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Game } from "./Game";
import { TextService } from "../Services/TextService";
import { TextRepository } from "../Repositories/TextRepository";
import { TextLengthInput } from "./TextLengthInput";

export function TypingArea() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(5);
  const [textService, setTextService] = useState(new TextService(new TextRepository()));
  const [typedChars, setTypedChars] = useState([]);
  const [backupText, setBackupText] = useState("");

  useEffect(() => {
    textService.GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
    });
  }, []);

  function newRun() {
    textService.GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
    });
  }

  if (text.length === 0 && typedChars.length !== 0) {
    newRun();
  }

  return (
    <div className="typing-area">
      <h1 className="typing-area__header ">Typing 100</h1>
      <TextLengthInput setTextLength={setTextLength} />
      <Game text={text} setText={setText} typedChars={typedChars} setTypedChars={setTypedChars} />
      <div className="typing-area__button-line">
        <Button
          text="Reset Run"
          onClick={() => {
            setText(backupText);
            setTypedChars([]);
          }}
        />
        <Button text="Generate New Text" onClick={() => newRun()} />
      </div>
    </div>
  );
}
