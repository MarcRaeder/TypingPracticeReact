import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Game } from "./Game";
import { GenerateNewText } from "./GenerateNewText";
import { TextLengthInput } from "./TextLengtInput";

export function TypingArea() {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(5);
  const [typedChars, setTypedChars] = useState([]);
  const [backupText, setBackupText] = useState("");
  useEffect(() => {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
    });
  }, []);

  function newRun() {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
    });
  }

  if (text.length === 0 && typedChars.length !== 0) {
    newRun();
  }

  return (
    <div className="TypingArea">
      <h1 className="TypingArea__Header ">Typing 100</h1>
      <TextLengthInput setTextLength={setTextLength} />
      <Game text={text} setText={setText} typedChars={typedChars} setTypedChars={setTypedChars} />
      <div className="TypingArea__ButtonLine">
        <Button
          text="Reset Run"
          onClick={() => {
            setText(backupText);
            setTypedChars([]);
          }}
        />
        <Button
          text="Generate New Text"
          onClick={() => {
            newRun();
          }}
        />
      </div>
    </div>
  );
}
