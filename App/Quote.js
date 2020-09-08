export class Quote {
  constructor(text) {
    // przpisanie jako właściwość
    this.text = text.toLowerCase();
    this.guessed = [];
  }
  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char === " " || this.guessed.includes(char)) {
        content += char;
      } else {
        content += "_";
      }
    }
    return content.toUpperCase();
  }

  guess(letter) {
    if (!this.text.includes(letter.toLowerCase())) {
      return false;
    }
    this.guessed.push(letter.toLowerCase());
    return true;
  }
}
