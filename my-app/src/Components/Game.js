import React, { useEffect, useRef, useState } from "react";

export function Game(props) {
  const divRef = useRef(HTMLDivElement);
  const currentChar = props.text[0];

  useEffect(() => {
    props.setText(props.text.slice(1));
    divRef.current.focus();
  }, []);

  function setTimer() {
    if (props.startTimerEnabled === true) {
      props.setStartTime(new Date().getTime());
      props.setStartTimerEnabled(false);
    }
  }

  function keyPressedIsCorrect(statusValue) {
    const copyTypedChars = props.typedChars.slice();
    copyTypedChars.push({
      char: currentChar,
      status: statusValue,
    });
    props.setTypedChars(copyTypedChars);
    props.setText(props.text.slice(1));
    setTimer();
  }

  const onKeyPressed = (event) => {
    const correct = event.key === currentChar && props.wrongChar === false;
    const incorrect = event.key !== currentChar;
    const firstIncorrectThenIncorrect = event.key === currentChar && props.wrongChar === true;

    if (correct) {
      keyPressedIsCorrect("correct");
    } else if (incorrect) {
      props.setWrongChar(true);
    } else if (firstIncorrectThenIncorrect) {
      keyPressedIsCorrect("incorrect");
      props.setWrongChar(false);
    }
  };

  return (
    <div className="TypingArea__Text">
      <div ref={divRef} onKeyDown={onKeyPressed} tabIndex="0">
        <>
          {props.typedChars.map((element, i) => (
            <span key={i} className={`TypingArea__Text--${element.status === "correct" ? "" : "in"}correct`}>
              {element.char}
            </span>
          ))}
        </>
        <span className="TypingArea__Text--current">{currentChar}</span>
        {props.text.slice(1)}
      </div>
    </div>
  );
}
