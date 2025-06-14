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
        const tile = document.createElement("div");
        tile.classList.add("color-tile");
        tile.addEventListener("mouseover", (e) => tileInteraction(e.target));
        tileContainer.appendChild(tile);
      }
    }
    clearBoard();
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

const clearBoard = () => {
  const tileNodeList = document.querySelectorAll(".color-tile");
  let tileElementList = Array.from(tileNodeList);
  for (let tile of tileElementList) {
    tile.style.setProperty("filter", "brightness(100%)");
  }
};

createTileBoard(gridSize);

const tileInteraction = (target) => {
  const regex = /\d*%/;
  const currBrightness = target.style.filter.match(regex)[0].replace("%", "");
  if (+currBrightness >= 0) {
    target.style.setProperty("filter", `brightness(${+currBrightness - 10}%)`);
  }
}

clearButton.addEventListener("click", () => {
  clearBoard();
})

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
