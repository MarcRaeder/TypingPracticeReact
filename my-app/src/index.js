import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TypingArea } from "./Components/TypingArea";
import { StatsArea } from "./Components/StatsArea";

function TypingPractice() {
  return (
    <>
      <TypingArea />
      <StatsArea />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TypingPractice />);
