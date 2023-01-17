import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TypingArea } from "./Components/TypingArea";
import { StatsArea } from "./Components/StatsArea";

export function TypingPractice() {
  const [lastSetTime, setLastSetTime] = useState("");

  return (
    <>
      <TypingArea setLastSetTime={setLastSetTime} />
      <StatsArea lastSetTime={lastSetTime} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TypingPractice />);
