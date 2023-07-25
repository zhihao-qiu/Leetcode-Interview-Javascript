var trap = function(height) {
  const leftMax = new Array(height.length).fill(1);
  const rightMax = new Array(height.length).fill(1);

  let trapWater = 0;

  // calculate the maxium heights on the left for each position
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = leftMax[i - 1] > height[i] ? leftMax[i - 1] : height[i];
  }

  // calculate the maxium heights on the right for each position
  rightMax[height.length - 1] = height[height.length - 1];
  for (i = height.length - 2; i >= 0; i--) {
    rightMax[i] = rightMax[i + 1] > height[i] ? rightMax[i + 1] : height[i];
  }

  // calculate the trapped water at each position
  for (i = 0; i < height.length; i++) {
    trapWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return trapWater;
};
