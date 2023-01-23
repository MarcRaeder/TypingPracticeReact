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
  const [startTimerEnabled, setStartTimerEnabled] = useState(true);
  const [isWrongCharTyped, setIsWrongCharTyped] = useState(false);

  function newRun() {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
      setStartTimerEnabled(true);
      setIsWrongCharTyped(false);
    });
  }

  function resetRun() {
    setText(backupText);
    setTypedChars([]);
    setIsWrongCharTyped(false);
    setStartTimerEnabled(true);
  }

  function textFinished() {
    GenerateNewText(textLength).then((response) => {
      setText(response);
      setBackupText(response);
      setTypedChars([]);
      setStartTimerEnabled(true);
      setIsWrongCharTyped(false);
      props.setEndTime(new Date().getTime());
      props.setSets((sets) => sets + 1);
      props.setCharsTyped((charsTyped) => charsTyped + typedChars.length);
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
        isWrongCharTyped={isWrongCharTyped}
        setIsWrongCharTyped={setIsWrongCharTyped}
        startTimerEnabled={startTimerEnabled}
        setStartTimerEnabled={setStartTimerEnabled}
        setStartTime={props.setStartTime}
        setEndTime={props.setEndTime}
        setClicks={props.setClicks}
        setWrongChars={props.setWrongChars}
        setLetters={props.setLetters}
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
