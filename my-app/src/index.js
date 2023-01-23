import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TypingArea } from "./Components/TypingArea";
import { StatsArea } from "./Components/StatsArea";

export function TypingPractice() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [wrongChars, setWrongChars] = useState(0);
  const [sets, setSets] = useState(0);
  const [charsTyped, setCharsTyped] = useState(0);
  const [letters, setLetters] = useState(
    JSON.parse(localStorage.getItem("letters")) ?? {
      a: { frequencie: 0, correct: 0 },
      b: { frequencie: 0, correct: 0 },
      c: { frequencie: 0, correct: 0 },
      d: { frequencie: 0, correct: 0 },
      e: { frequencie: 0, correct: 0 },
      f: { frequencie: 0, correct: 0 },
      g: { frequencie: 0, correct: 0 },
      h: { frequencie: 0, correct: 0 },
      i: { frequencie: 0, correct: 0 },
      j: { frequencie: 0, correct: 0 },
      k: { frequencie: 0, correct: 0 },
      l: { frequencie: 0, correct: 0 },
      m: { frequencie: 0, correct: 0 },
      n: { frequencie: 0, correct: 0 },
      o: { frequencie: 0, correct: 0 },
      p: { frequencie: 0, correct: 0 },
      q: { frequencie: 0, correct: 0 },
      r: { frequencie: 0, correct: 0 },
      s: { frequencie: 0, correct: 0 },
      t: { frequencie: 0, correct: 0 },
      u: { frequencie: 0, correct: 0 },
      v: { frequencie: 0, correct: 0 },
      w: { frequencie: 0, correct: 0 },
      x: { frequencie: 0, correct: 0 },
      y: { frequencie: 0, correct: 0 },
      z: { frequencie: 0, correct: 0 },
    }
  );

  return (
    <>
      <TypingArea
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        setClicks={setClicks}
        setWrongChars={setWrongChars}
        setSets={setSets}
        setCharsTyped={setCharsTyped}
        setLetters={setLetters}
      />
      <StatsArea
        startTime={startTime}
        endTime={endTime}
        clicks={clicks}
        setClicks={setClicks}
        wrongChars={wrongChars}
        setWrongChars={setWrongChars}
        sets={sets}
        setSets={setSets}
        charsTyped={charsTyped}
        setCharsTyped={setCharsTyped}
        letters={letters}
        setLetters={setLetters}
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TypingPractice />);
