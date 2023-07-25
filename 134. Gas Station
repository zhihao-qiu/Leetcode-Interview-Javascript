var canCompleteCircuit = function(gas, cost) {
  let [totalGas, totalCost, start, tank] = [0, 0, 0, 0];

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
  };
  return totalGas >= totalCost ? start : -1;
};
