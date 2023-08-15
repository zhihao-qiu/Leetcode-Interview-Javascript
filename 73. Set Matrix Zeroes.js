var setZeroes = function(matrix) {

  const zerosCol = [];
  const zerosRow = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (!zerosCol.includes(i)) zerosCol.push(i);
        if (!zerosRow.includes(j)) zerosRow.push(j);
      }
    }
  }

  if ((zerosCol || zerosCol.length !== 0) && (zerosRow || zerosRow.length !== 0)) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (zerosCol.includes(i) || zerosRow.includes(j)) matrix[i][j] = 0;
      }
    }
  }

};
