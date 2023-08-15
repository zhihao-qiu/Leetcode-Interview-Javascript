var rotate = function(matrix) {
  const result = matrix.map(subarray => subarray.map(() => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = matrix[matrix[0].length - 1 - j][i];
    }
  }

  matrix.forEach((row, i) => row.forEach((_, j) => row[j] = result[i][j]));
};