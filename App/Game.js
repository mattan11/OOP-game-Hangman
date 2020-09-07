import { Quote } from "./Quote.js";

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

    // losowanie hasła i kategorii
    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    // wyświetlenie kategori
    this.categoryWrapper.innerText = category;
    // wyświetlenia
    this.quote = new Quote(text);
  }

  guess(letter) {
    this.quote.guess(letter);
    this.drawQuote();
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
      button.innerText = label;
      button.addEventListener("click", () => this.guess(label));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerText = content;
  }

  start() {
    this.drawLetters();
    this.drawQuote();
  }
}

const game = new Game({
  // przekazanie zmiennych inicjalizujących do Game.js przez konstruktor muszą być odebrane w konstruktorze
  outputWrapper: document.getElementById("output"),
  wordWrapper: document.getElementById("word"),
  categoryWrapper: document.getElementById("category"),
  lettersWrapper: document.getElementById("letters"),
});
game.start();
