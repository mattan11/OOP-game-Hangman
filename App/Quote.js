export class Quote {
  constructor(text) {
    // przpisanie jako właściwość
    this.text = text;
  }
  getContent() {
    let content = "";
    for (const char of this.text) {
      if (char !== " ") {
        content += "_";
      } else {
        content += " ";
      }
    }
    return content;
  }
}
