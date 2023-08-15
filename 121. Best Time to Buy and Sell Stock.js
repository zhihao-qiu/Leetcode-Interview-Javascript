var maxProfit = function(prices) {
  if (!prices || prices.length < 2) {
    return 0; // Not enough prices to make a transaction
  }

  // calculate the minimum price
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const currentProfit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
};
