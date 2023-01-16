export function TextLengthInput() {
  return (
    <div class="TypingArea__TextLength">
      Text Length
      <input type="number" id="TextLength" onkeypress="handleKeyPress(event)" placeholder="Text-Length 1-100" />
    </div>
  );
}
