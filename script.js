const gridButton = document.querySelector("#grid-button");
const clearButton = document.querySelector("#clear-button");
const tileBoardContainer = document.querySelector("#tile-board-container");

let gridSize = 16;

const createTileBoard = (size) => {
  try {

    for (let y = 0; y < +size; y++) {
      document.documentElement.style.setProperty("--board-size", gridSize)
      const tileRow = document.createElement("div");
      tileRow.classList.add("flex-container");
      tileBoardContainer.append(tileRow);

      for (let x = 0; x < +size; x++) {
        const tileContainer = document.createElement("div");
        //tileContainer.innerText = `${x},${y}`;
        tileContainer.classList.add("test-tile");
        tileRow.appendChild(tileContainer);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const removeBoard = () => {
  while(tileBoardContainer.firstChild) {
    tileBoardContainer.removeChild(tileBoardContainer.firstChild);
  }
}

const changeBoardSize = (size) => {
  removeBoard();
  createTileBoard(size);
}

createTileBoard(gridSize);

gridButton.addEventListener("click", () => {
  do {
    let inputValue = window.prompt("Input the new grid size (1-100)", 16);
    if (inputValue === null) {
      return;
    }
    gridSize = +inputValue;
  } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);
  changeBoardSize(gridSize);
});
