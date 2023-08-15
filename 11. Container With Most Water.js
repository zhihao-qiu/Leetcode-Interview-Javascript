var maxArea = function(height) {
  let [leftAxis, rigthAxis, maxArea, currentArea] = [0, height.length - 1, 0, 0];
  while (rigthAxis > leftAxis) {
    currentArea = (rigthAxis - leftAxis) * (Math.min(height[rigthAxis], height[leftAxis]));
    if (maxArea < currentArea) maxArea = currentArea;
    if (height[leftAxis] < height[rigthAxis]) {
      leftAxis += 1;
    } else {
      rigthAxis -= 1;
    }
  }
  return maxArea;
};
