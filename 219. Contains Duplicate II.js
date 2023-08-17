var containsNearbyDuplicate = function(nums, k) {
  const mapping = {};
  for (let i = 0; i < nums.length; i++) {
    if (mapping.hasOwnProperty(nums[i]) && Math.abs(i - mapping[nums[i]]) <= k) {
      return true;
    } else {
      mapping[nums[i]] = i;
    }
  }
  return false;
};
