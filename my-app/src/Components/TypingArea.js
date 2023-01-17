import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Game } from "./Game";
import { GenerateNewText } from "./GenerateNewText";
import { TextLengthInput } from "./TextLengthInput";

export function TypingArea(props) {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(1);
  const [typedChars, setTypedChars] = useState([]);
  const [backupText, setBackupText] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [startTimerEnabled, setStartTimerEnabled] = useState(true);
  const [wrongChar, setWrongChar] = useState(false);

  function newRun() {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
      setStartTimerEnabled(true);
      setWrongChar(false);
    });
  }

  function resetRun() {
    setText(backupText);
    setTypedChars([]);
    setWrongChar(false);
    setStartTimerEnabled(true);
  }

  function textFinished() {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
      setStartTimerEnabled(true);
      setWrongChar(false);

      props.setLastSetTime((new Date().getTime() - startTime) / 1000);
    });
  }

  useEffect(() => {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
    });
  }, []);

  if (text.length === 0 && typedChars.length !== 0) {
    textFinished();
  }

  return (
    <div className="TypingArea">
      <h1 className="TypingArea__Header ">Typing 100</h1>
      <TextLengthInput setTextLength={setTextLength} />
      <Game
        text={text}
        setText={setText}
        typedChars={typedChars}
        setTypedChars={setTypedChars}
        setLastSetTime={props.setLastSetTime}
        setStartTime={setStartTime}
        setStartTimerEnabled={setStartTimerEnabled}
        startTimerEnabled={startTimerEnabled}
        wrongChar={wrongChar}
        setWrongChar={setWrongChar}
      />
      <div className="TypingArea__ButtonLine">
        <Button text="Reset Run" onClick={() => resetRun()} />
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
