let boxes = document.querySelectorAll(".box");
let resebtn = document.querySelector("#reset-btn");
let turnX = true;

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
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "#c44536";
      turnX = false;
    } else {
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
        disabledBoxes();
        showWinner(position1);
      }
    }
  }
};

const showWinner = (winner) => {};
