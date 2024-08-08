const container = document.getElementById("container");
const button = document.getElementById("btn");
const currentStatus = document.getElementById("status");
const resetGame = document.getElementById("reset-game");
resetGame.style.display = "none";
let players = ["x", "o"];
let p = 1;
let k = 0;
let boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
resetGame.addEventListener("click", () => {
  location.reload();
});
const updateStatus = () => {
  if (p == 0) {
    currentStatus.innerText = "player O turn";
  } else if (p == 1) {
    currentStatus.innerText = "player X turn";
  }
};
const startGame = () => {
  button.style.zIndex = -999;
  button.style.display = "none";
  resetGame.style.display = "flex";
  updateStatus();
  createGameBoard();
};

const createGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    let x = i + 1;
    const tile = document.createElement("div");
    tile.classList.add("box");
    k++;
    tile.classList.add(`box${k}`);
    tile.setAttribute("id", "tileId");
    container.appendChild(tile);
    if (x >= 1 && x <= 3) {
      tile.style.borderTop = "none";
    } else if (x >= 7 && x <= 9) {
      tile.style.borderBottom = "none";
    }
    if (x == 1 || x == 7 || x == 4) {
      tile.style.borderLeft = "none";
    } else if (x == 3 || x == 9 || x == 6) {
      tile.style.borderRight = "none";
    }
  }
  updateBoard();
};

const updateBoard = () => {
  const tiles = document.querySelectorAll("#tileId");
  tiles.forEach((eachTile) => {
    eachTile.addEventListener("click", (event) => {
      const clickedBox = event.target;
      if (p == 0) {
        p++;
      } else if (p == 1) {
        p--;
      }
      if (clickedBox.classList[1] === "box1") {
        boardState[0][0] = players[p];
      } else if (clickedBox.classList[1] == "box2") {
        boardState[0][1] = players[p];
      } else if (clickedBox.classList[1] == "box3") {
        boardState[0][2] = players[p];
      } else if (clickedBox.classList[1] == "box4") {
        boardState[1][0] = players[p];
      } else if (clickedBox.classList[1] == "box5") {
        boardState[1][1] = players[p];
      } else if (clickedBox.classList[1] == "box6") {
        boardState[1][2] = players[p];
      } else if (clickedBox.classList[1] == "box7") {
        boardState[2][0] = players[p];
      } else if (clickedBox.classList[1] == "box8") {
        boardState[2][1] = players[p];
      } else if (clickedBox.classList[1] == "box9") {
        boardState[2][2] = players[p];
      } else {
        console.log("error");
      }
      clickedBox.innerText = players[p];
      clickedBox.style.pointerEvents = "none";
      updateStatus();
      checkWin();
    });
  });
};

const checkWin = () => {
  for (let i = 0; i < 3; i++) {
    if (
      boardState[i][0] === "x" &&
      boardState[i][1] === "x" &&
      boardState[i][2] === "x"
    ) {
      currentStatus.innerText = "player X wins";
      container.style.pointerEvents = "none";
      return;
    } else if (
      boardState[i][0] === "o" &&
      boardState[i][1] === "o" &&
      boardState[i][2] === "o"
    ) {
      currentStatus.innerText = "player O wins";
      container.style.pointerEvents = "none";
      return;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      boardState[0][i] === "x" &&
      boardState[1][i] === "x" &&
      boardState[2][i] === "x"
    ) {
      currentStatus.innerText = "player X wins";
      container.style.pointerEvents = "none";
      return;
    } else if (
      boardState[0][i] === "o" &&
      boardState[1][i] === "o" &&
      boardState[2][i] === "o"
    ) {
      currentStatus.innerText = "player O wins";
      container.style.pointerEvents = "none";
      return;
    }
  }

  if (
    (boardState[0][0] === "x" &&
      boardState[1][1] === "x" &&
      boardState[2][2] === "x") ||
    (boardState[0][2] === "x" &&
      boardState[1][1] === "x" &&
      boardState[2][0] === "x")
  ) {
    currentStatus.innerText = "player X wins";
    container.style.pointerEvents = "none";
    return;
  } else if (
    (boardState[0][0] === "o" &&
      boardState[1][1] === "o" &&
      boardState[2][2] === "o") ||
    (boardState[0][2] === "o" &&
      boardState[1][1] === "o" &&
      boardState[2][0] === "o")
  ) {
    currentStatus.innerText = "player O wins";
    container.style.pointerEvents = "none";
    return;
  }
  checkDraw();
};

const checkDraw = () => {
  if (!boardState.flat().includes("")) {
    currentStatus.innerText = "It's a draw!";
    container.style.pointerEvents = "none";
    return;
  }
};
