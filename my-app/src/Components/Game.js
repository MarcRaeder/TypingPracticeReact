import React, { useEffect, useRef } from "react";

export function Game(props) {
  const divRef = useRef(HTMLDivElement);
  const currentChar = props.text[0];
  const whiteSpace = " ";

  function setTimer() {
    if (props.startTimerEnabled === true) {
      props.setStartTime(new Date().getTime());
      props.setStartTimerEnabled(false);
    }
  }

  function keyPressedIsCorrect(statusValue, event) {
    const copyTypedChars = props.typedChars.slice();
    copyTypedChars.push({
      char: currentChar,
      status: statusValue,
    });
    props.setTypedChars(copyTypedChars);
    props.setText(props.text.slice(1));
    setTimer();
    props.setClicks((clicks) => clicks + 1);
    if (event.key !== whiteSpace) {
      props.setLetters((letters) => {
        letters[`${event.key}`].frequencie = letters[`${event.key}`].frequencie + 1;
        return letters;
      });
    }
  }

  const onKeyPressed = (event) => {
    const correct = event.key === currentChar && props.isWrongCharTyped === false;
    const incorrect = event.key !== currentChar;
    const firstIncorrectThenIncorrect = event.key === currentChar && props.isWrongCharTyped === true;

    if (correct) {
      keyPressedIsCorrect("correct", event);
      if (event.key !== whiteSpace) {
        props.setLetters((letters) => {
          letters[`${event.key}`].correct = letters[`${event.key}`].correct + 1;
          return letters;
        });
      }
    } else if (incorrect) {
      props.setIsWrongCharTyped(true);
    } else if (firstIncorrectThenIncorrect) {
      keyPressedIsCorrect("incorrect", event);
      props.setIsWrongCharTyped(false);
      props.setWrongChars((wrongChars) => wrongChars + 1);
    }
  };

  useEffect(() => {
    props.setText(props.text.slice(1));
    divRef.current.focus();
  }, []);

  useEffect(() => {
    divRef.current.focus();
  }, [props.typedChars]);

  return (
    <div className="typing-area__text">
      <div ref={divRef} onKeyDown={onKeyPressed} tabIndex="0">
        <>
          {props.typedChars.map((element, index) => (
            <span key={index} className={`typing-area__text--${element.status === "correct" ? "" : "in"}correct`}>
              {element.char}
            </span>
          ))}
        </>
        <span className="typing-area__text--current">{currentChar}</span>
        {props.text.slice(1)}
      </div>
    </div>
  );
}
