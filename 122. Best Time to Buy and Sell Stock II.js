var maxProfit = function(prices) {
  if (!prices || prices.length < 2) {
    return 0; // Not enough prices to make a transaction
  }

  // calculate the minimum price
  let prevPrice = prices[0];
  let currPrice;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    currPrice = prices[i];
    if (currPrice > prevPrice) maxProfit += currPrice - prevPrice;
    prevPrice = currPrice;
  }
  return maxProfit;
};
