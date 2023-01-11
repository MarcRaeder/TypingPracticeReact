import React, { useEffect, useRef, useState } from "react";
import { GenerateNewText } from "./GenerateNewText";

export function Game(props) {
  const [current, setCurrent] = useState(props.text[0]);
  const [text, setText] = useState(props.text);
  const [typedChars, setTypedChars] = useState([]);
  const divRef = useRef(HTMLDivElement);
  const [wrongChar, setWrongChar] = useState(false);

  useEffect(() => {
    setText(props.text.slice(1));
    setCurrent(props.text[0]);
    divRef.current.focus();
  }, [props.text]);

  const onKeyPressed = (event) => {
    const correct = event.key === current && wrongChar === false;
    const incorrect = event.key !== current;
    const firstIncorrectThenIncorrect = current && wrongChar === true;
    if (correct) {
      const copyTypedChars = typedChars.slice();
      copyTypedChars.push({
        char: current,
        status: "correct",
      });
      setTypedChars(copyTypedChars);
      setCurrent(text[0]);
      setText(text.slice(1));
    } else if (incorrect) {
      setWrongChar(true);
    } else if (firstIncorrectThenIncorrect) {
      const copyTypedChars = typedChars.slice();
      copyTypedChars.push({
        char: current,
        status: "incorrect",
      });
      setTypedChars(copyTypedChars);
      setCurrent(text[0]);
      setText(text.slice(1));
      setWrongChar(false);
    }
  };

  return (
    <>
      <div ref={divRef} onKeyDown={onKeyPressed} tabIndex="0">
        <>
          {typedChars.map((element, i) => (
            <span key={i} className={`TypingArea__Text--${element.status === "correct" ? "" : "in"}correct`}>
              {element.char}
            </span>
          ))}
        </>
        <span className="TypingArea__Text--current">{current}</span>
        {text}
      </div>
    </>
  );
}
