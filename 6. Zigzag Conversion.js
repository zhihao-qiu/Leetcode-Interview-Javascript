var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const rows = new Array(numRows).fill('');
  let rowIndex = 0;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    rows[rowIndex] += s[i];

    if (rowIndex === 0) {
      direction = 1; // Move down
    } else if (rowIndex === numRows - 1) {
      direction = -1; // Move up
    }

    rowIndex += direction;
  }
  return rows.join('');
};
