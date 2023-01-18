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

  console.log({ wrongChars });
  return (
    <>
      <TypingArea
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        setClicks={setClicks}
        setWrongChars={setWrongChars}
      />
      <StatsArea
        startTime={startTime}
        endTime={endTime}
        clicks={clicks}
        setClicks={setClicks}
        wrongChars={wrongChars}
        setWrongChars={setWrongChars}
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TypingPractice />);
