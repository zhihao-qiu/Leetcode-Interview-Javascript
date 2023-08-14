var isValidSudoku = function(board) {
  const rows = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const cols = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const blocks = Array.from({ length: 9 }, () => new Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cellValue = board[i][j];

      if (cellValue !== '.') {
        const digit = parseInt(cellValue) - 1;
        const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i][digit] || cols[j][digit] || blocks[blockIndex][digit]) {
          return false;
        }

        rows[i][digit] = true;
        cols[j][digit] = true;
        blocks[blockIndex][digit] = true;
      }
    }
  };
  return true;
};
