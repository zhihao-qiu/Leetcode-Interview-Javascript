/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const numRows = board.length;
  const numCols = board[0].length;

  const getNeighborLives = (y, x) => {
    let neighborLives = 0;

    for (let i = Math.max(0, y - 1); i <= Math.min(numRows - 1, y + 1); i++) {
      for (let j = Math.max(0, x - 1); j <= Math.min(numCols - 1, x + 1); j++) {
        if (i !== y || j !== x) neighborLives += board[i][j] === 1 ? 1 : 0;
      }
    }

    return neighborLives;
  };

  const newBoard = new Array(numRows).fill(0).map(() => new Array(numCols).fill(0));


  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const neighborLives = getNeighborLives(i, j);
      if (board[i][j]) {
        newBoard[i][j] = neighborLives === 2 || neighborLives === 3 ? 1 : 0;
      } else {
        newBoard[i][j] = neighborLives === 3 ? 1 : 0;
      }
    }
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      board[i][j] = newBoard[i][j];
    }
  }
};


board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
// board = [[1,1],[1,0]]
gameOfLife(board);