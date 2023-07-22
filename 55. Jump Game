var canJump = function(nums) {
  let furthestPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > furthestPosition) {
      return false;
    }
    furthestPosition = Math.max(furthestPosition, i + nums[i]);

    if (furthestPosition >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
