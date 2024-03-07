/* import {findEmptyGrid} from "./script";
 */
// for the event link to the start button
var selectedRandomIndex;

var puzzleImagePieces = [
    'url("images/image1pieces/piece-2.png")',
    'url("images/image1pieces/piece-3.png")',
    'url("images/image1pieces/piece-4.png")',
    'url("images/image1pieces/piece-5.png")',
    'url("images/image1pieces/piece-6.png")',
    'url("images/image1pieces/piece-7.png")',
    'url("images/image1pieces/piece-8.png")',
    'url("images/image1pieces/piece-9.png")',
    'none',
];

const puzzleGridCells = [
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "E9"
];

// first get random piece image
function getRandomPieceImage(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    selectedRandomIndex = randomIndex;

    // get random item
    const pieceImage = arr[randomIndex];

    return pieceImage;
}

//console.log(puzzleImagePieces[0]);
/* console.log(getRandomPieceImage(puzzleImagePieces));

console.log(puzzleGridCells); */

// then assign each random piece image 
function pieceImageAssignment() {
    for(let i = 0; i < 8; i++) {
        /* var ImagePiece = getRandomPieceImage(puzzleImagePieces);
        var temp = ImagePiece; */
        let element = document.getElementById(puzzleGridCells[i]);
        element.style.backgroundImage = getRandomPieceImage(puzzleImagePieces);
    
        // removing the random image picked to remove from the list to avoid reappearance
        puzzleImagePieces.splice(selectedRandomIndex, 1);
    }
}

function startButtonClick() {
    pieceImageAssignment();
}
