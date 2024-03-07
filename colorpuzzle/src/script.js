// empty grid coordinates holder variable
var emptyGridCoordinates;
var emptyGridCellNo;

function findEmptyGrid() {
    coordinatesCheck(backgroundColorCheck("E1", 1, 1));
    coordinatesCheck(backgroundColorCheck("E2", 1, 2));
    coordinatesCheck(backgroundColorCheck("E3", 1, 3));
    coordinatesCheck(backgroundColorCheck("E4", 2, 1));
    coordinatesCheck(backgroundColorCheck("E5", 2, 2));
    coordinatesCheck(backgroundColorCheck("E6", 2, 3));
    coordinatesCheck(backgroundColorCheck("E7", 3, 1));
    coordinatesCheck(backgroundColorCheck("E8", 3, 2));
    coordinatesCheck(backgroundColorCheck("E9", 3, 3));
    console.log(emptyGridCoordinates);
}

// function for checking if the returned coordinates from backgroundColorCheck of each grid cell
// is not undefined and then assigned the coordinates of the empty grid.
function coordinatesCheck(coord) {
    if (coord !== undefined) {
        emptyGridCoordinates = coord;
    }
}

function backgroundColorCheck(id, row, col) {
    let element = document.getElementById(id);
    let backgroundColor = window.getComputedStyle(element).backgroundColor;
    //console.log(backgroundColor);
    var coordinates;

        if(backgroundColor === "rgba(0, 0, 0, 0)" || backgroundColor === "rgb(255, 255, 255)") {
            coordinates = [row, col];
            emptyGridCellNo = id;
            return coordinates;
        }
}

findEmptyGrid();

// function for finding available puzzle pieces to be moved
var AvailablePuzzlePiecesCoord;

function findAvailablePuzzlePieces() {
    //if empty grid is at the top left edge E1
    if (emptyGridCoordinates[0] === 1 && emptyGridCoordinates[1] === 1) {
        AvailablePuzzlePiecesCoord = [[1, 2], [2, 1]];
    }
    //if empty grid is at the top middle horizontal row E2 
    if (emptyGridCoordinates[0] === 1 && emptyGridCoordinates[1] === 2) {
        AvailablePuzzlePiecesCoord = [[1, 1], [1, 3], [2, 2]];
    }
    //if empty grid is at the top right edge E3
    if (emptyGridCoordinates[0] === 1 && emptyGridCoordinates[1] === 3) {
        AvailablePuzzlePiecesCoord = [[1, 2], [2, 3]];
    }
    //if empty grid is at the left middle vertical column E4
    if (emptyGridCoordinates[0] === 2 && emptyGridCoordinates[1] === 1) {
        AvailablePuzzlePiecesCoord = [[1, 1], [3, 1], [2, 2]];
    }
    //if empty grid is at the middle of the grid E5
    if (emptyGridCoordinates[0] === 2 && emptyGridCoordinates[1] === 2) {
        AvailablePuzzlePiecesCoord = [[1, 2], [2, 1], [2, 3], [3, 2]];
    }
    //if If empty grid is at the right middle vertical column E6
    if (emptyGridCoordinates[0] === 2 && emptyGridCoordinates[1] === 3) {
        AvailablePuzzlePiecesCoord = [[1, 3], [3, 3], [2, 2]];
    }
    //if empty grid is at the bottom left edge E7
    if (emptyGridCoordinates[0] === 3 && emptyGridCoordinates[1] === 1) {
        AvailablePuzzlePiecesCoord = [[2, 1], [3, 2]];
    }
    //if empty grid is at the bottom middle horizontal row E8
    if (emptyGridCoordinates[0] === 3 && emptyGridCoordinates[1] === 2) {
        AvailablePuzzlePiecesCoord = [[3, 1], [3, 3], [2, 2]];
    }
    //if empty grid is at bottom right edge E9
    if (emptyGridCoordinates[0] === 3 && emptyGridCoordinates[1] === 3) {
        AvailablePuzzlePiecesCoord = [[3, 2], [2, 3]];
    }

}

findAvailablePuzzlePieces();

// debuging purpose
/* console.log(AvailablePuzzlePiecesCoord);
console.log(emptyGridCellNo); */
//

function move(cellNo, cellCoord) {
    let emptyGridElement = document.getElementById(emptyGridCellNo);
    let cellElement = document.getElementById(cellNo);

    if (cellNo == "E1") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E1").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E2") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E2").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E3") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E3").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E4") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E4").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E5") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E5").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E6") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E6").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E7") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E7").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo === "E8") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E8").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    if (cellNo == "E9") {
        let isSubvalue = AvailablePuzzlePiecesCoord.some(subArray => subArray.every((value, index) => value === cellCoord[index]));
        if (isSubvalue) {
            let emptyGridBG = window.getComputedStyle(emptyGridElement).backgroundColor;
            let cellGridBG = window.getComputedStyle(cellElement).backgroundColor;
            document.getElementById(emptyGridCellNo).style.backgroundColor = cellGridBG;
            document.getElementById("E9").style.backgroundColor = emptyGridBG;
            findEmptyGrid();
            findAvailablePuzzlePieces();
        } 
    }
    
}