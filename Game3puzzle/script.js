const puzzle = document.getElementById("puzzle");
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, null];

function createPuzzle() {
    puzzle.innerHTML = "";
    tiles.forEach((value, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (value === null) {
            tile.classList.add("empty");
        } else {
            tile.textContent = value;
            tile.addEventListener("click", () => moveTile(index));
        }

        puzzle.appendChild(tile);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
        index - 1,
        index + 1,
        index - 3,
        index + 3
    ];

    if (validMoves.includes(emptyIndex)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        createPuzzle();
        checkWin();
    }
}

function shufflePuzzle() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    createPuzzle();
}

function checkWin() {
    const win = [1, 2, 3, 4, 5, 6, 7, 8, null];
    if (JSON.stringify(tiles) === JSON.stringify(win)) {
        setTimeout(() => alert("🎉 You solved the puzzle!"), 100);
    }
}

createPuzzle();
