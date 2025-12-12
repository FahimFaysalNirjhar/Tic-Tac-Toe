let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let main = document.querySelector("main");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#New-btn");
let turnX = true;

const audio = new Audio("../assets/click.mp3");
let successSound = new Audio("../assets/victory.mp3");

const winPattens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disabledBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    turnX = true;
    box.disabled = false;
    box.innerText = "";
    audio.play();
  }
  main.classList.remove("hidden");
  msgContainer.classList.add("hidden");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      audio.play();
      box.innerText = "X";
      box.style.color = "#c44536";
      turnX = false;
    } else {
      audio.play();
      box.innerText = "O";
      box.style.color = "#772e25";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattens) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log("winner");
        showWinner(position1);
      }
    }
  }
};

const showWinner = (winner) => {
  main.classList.add("hidden");
  msgContainer.classList.remove("hidden");
  msg.innerText = `Congratulations! The winner is ${winner}.`;
  disabledBoxes();
  successSound.play();
};

newBtn.addEventListener("click", enableBoxes);
resetBtn.addEventListener("click", enableBoxes);
