var twoSum = function(numbers, target) {
  let [maxIndex, minIndex] = [numbers.length - 1, 0];

  while (maxIndex > minIndex) {
    if (numbers[maxIndex] + numbers[minIndex] == target) return [minIndex + 1, maxIndex + 1];
    if (numbers[maxIndex] + numbers[minIndex] > target) {
      maxIndex -= 1;
    } else {
      minIndex += 1;
    }
  }

  return null;
};
