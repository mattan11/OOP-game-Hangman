class Game {
  quotes = [
    {
      text: "Pan Tadeusz",
      category: "Utwór literacki",
    },
    {
      text: "Janko Muzykant",
      category: "Utwór literacki",
    },
    {
      text: "Zielona Mila",
      category: "Film",
    },
    {
      text: "Wlazł kotek na płotek",
      category: "Piosenka",
    },
    {
      text: "Władca pierścieni",
      category: "Książka, film",
    },
  ];

  //odebranie właściwości inicjalizujących
  constructor({ outputWrapper, wordWrapper, categoryWrapper, lettersWrapper }) {
    // te 4 odebrane argumenty staną się właściwościami klasy Game, aby można było się do nich odwoływać
    //przypisanie właściwości inicjalizujących do obiektu
    this.outputWrapper = outputWrapper;
    this.wordWrapper = wordWrapper;
    this.categoryWrapper = categoryWrapper;
    this.lettersWrapper = lettersWrapper;

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.wordWrapper.innerHTML = text;
  }

  guess(letter) {
    console.log(letter);
  }
  drawLetters() {
    const letters = [
      "A",
      "Ą",
      "B",
      "C",
      "Ć",
      "D",
      "E",
      "Ę",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "Ł",
      "M",
      "N",
      "Ń",
      "O",
      "Ó",
      "P",
      "Q",
      "R",
      "S",
      "Ś",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Ź",
      "Ż",
    ];
    //wyświetlenie przycisków z literami
    for (let i = 0; i < letters.length; i++) {
      const label = letters[i];
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => this.guess(label));
      this.lettersWrapper.appendChild(button);
    }
  }

  start() {
    this.drawLetters();
  }
}
