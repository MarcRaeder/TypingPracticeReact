export async function GenerateNewText(textLength) {
  let file = "https://random-word-api.herokuapp.com/word?number=" + textLength;
  Math.floor(Math.random() * 100);
  let response = await fetch(file);
  let words = await response.json();
  let text = words.join(" ");

  return text;
}
