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
}
