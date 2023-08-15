var candy = function(ratings) {
  let totalCandy = ratings.length;
  let candyArray = new Array(ratings.length).fill(1);

  // First pass: assign candies from left to right
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      totalCandy -= candyArray[i];
      candyArray[i] = candyArray[i - 1] + 1;
      totalCandy += candyArray[i];
    }
  }

  // Second pass: adjust candies from right to left
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candyArray[i] <= candyArray[i + 1]) {
      totalCandy -= candyArray[i];
      candyArray[i] = candyArray[i + 1] + 1;
      totalCandy += candyArray[i];
    }
  }
  return totalCandy;
};
