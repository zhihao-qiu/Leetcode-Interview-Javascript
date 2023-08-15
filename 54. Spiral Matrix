var spiralOrder = function(matrix) {
  const result = [];
  if (!matrix || matrix.length === 0) {
    return result;
  }
  let [top, bottom, left, right] = [0, matrix.length - 1, 0, matrix[0].length - 1];

  while (result.length < matrix.length * matrix[0].length) {
    // top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};
