import React, { useEffect, useRef, useState } from "react";

export function Game(props) {
  const divRef = useRef(HTMLDivElement);
  const [wrongChar, setWrongChar] = useState(false);
  const current = props.text[0];

  useEffect(() => {
    props.setText(props.text.slice(1));
    divRef.current.focus();
  }, []);

  const onKeyPressed = (event) => {
    const correct = event.key === current && wrongChar === false;
    const incorrect = event.key !== current;
    const firstIncorrectThenIncorrect = current && wrongChar === true;

    if (correct) {
      const copyTypedChars = props.typedChars.slice();
      copyTypedChars.push({
        char: current,
        status: "correct",
      });
      props.setTypedChars(copyTypedChars);
      props.setText(props.text.slice(1));
    } else if (incorrect) {
      setWrongChar(true);
    } else if (firstIncorrectThenIncorrect) {
      const copyTypedChars = props.typedChars.slice();
      copyTypedChars.push({
        char: current,
        status: "incorrect",
      });
      props.setTypedChars(copyTypedChars);
      props.setText(props.text.slice(1));
      setWrongChar(false);
    }
  };

  return (
    <div className="typing-area__text">
      <div ref={divRef} onKeyDown={onKeyPressed} tabIndex="0">
        <>
          {props.typedChars.map((element, i) => (
            <span key={i} className={`typing-area__text--${element.status === "correct" ? "" : "in"}correct`}>
              {element.char}
            </span>
          ))}
        </>
        <span className="typing-area__text--current">{current}</span>
        {props.text.slice(1)}
      </div>
    </div>
  );
}
