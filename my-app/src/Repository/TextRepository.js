export class TextRepository {
  async GenerateNewText(textLength) {
    let file = "https://localhost:7224/word?amount=" + textLength;
    let response = await fetch(file);
    let words = await response.json();
    let text = words.join(" ");

    return text;
  }
}
