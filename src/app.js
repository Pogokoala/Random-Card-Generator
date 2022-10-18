let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let suit = ["♠️", "♥️", "♣️", "♦️"];

const generateRandomNumber = function() {
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

const selectedSuit = generateRandomSuit();

document.querySelector(".top-suit").innerHTML = selectedSuit;
document.querySelector(".number").innerHTML = generateRandomNumber();
document.querySelector(".bottom-suit").innerHTML = selectedSuit;

if (selectedSuit === "♥️" || selectedSuit === "♦️") {
  document.querySelector(".top-suit").style.color = "red";
  document.querySelector(".bottom-suit").style.color = "red";
}
