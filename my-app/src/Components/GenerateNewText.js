export async function GenerateNewText(textLength) {
  const errorMessage = "Es sind nur 1 - 100 Wörter erlaubt";
  if (textLength < 1 || textLength > 100) {
    return <div className="ErrorMessage">{errorMessage}</div>;
  }
  const file = "https://random-word-api.herokuapp.com/word?number=" + textLength;
  Math.floor(Math.random() * 100);
  const response = await fetch(file);
  const words = await response.json();
  const text = words.join(" ");

  return text;
}
