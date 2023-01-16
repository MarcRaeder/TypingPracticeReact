export async function GenerateNewText(textLength) {
  const fehlermeldung = "Es sind nur 1 - 100 Wörter erlaubt";
  if (textLength < 1 || textLength > 100) {
    return <div className="Fehlermeldung">{fehlermeldung}</div>;
  }
  let file = "https://random-word-api.herokuapp.com/word?number=" + textLength;
  Math.floor(Math.random() * 100);
  let response = await fetch(file);
  let words = await response.json();
  let text = words.join(" ");

  return text;

  //   rest.textContent = text;
  // current = document.createElement("SPAN");
  // current.className = "TypingArea__Text--current";
  // current.textContent = rest.textContent[0];
  // rest.textContent = rest.textContent.slice(1);
  // textarea = document.getElementsByClassName("TypingArea__Text");
  // textarea[0].insertBefore(current, rest);
  // document.querySelector(".TypingArea__input_error").innerHTML = "";
  // incorrectKey = 0;
  // document.getElementById("TextLength").blur();
  // document.getElementById("btn").blur();
}
