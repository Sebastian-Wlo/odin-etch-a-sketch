const tileBoardContainer = document.querySelector("#tile-board-container");

let gridSize = 16;

const createTileBoard = (size) => {
  console.log(typeof +size);
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
  tileBoardContainer.innerHTML = "";
}

const changeBoardSize = (size) => {
  removeBoard();
  createTileBoard(size);
}

createTileBoard(gridSize);