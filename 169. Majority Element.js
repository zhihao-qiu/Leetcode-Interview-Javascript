var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  let prevItem = null;
  let duplicateTimes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prevItem != null & prevItem == nums[i]) {
      duplicateTimes++;
    } else {
      if (duplicateTimes > nums.length / 2) {
        return prevItem;
      }
      prevItem = nums[i];
      duplicateTimes = 1;
    }
  }
  if (duplicateTimes > nums.length / 2) {
    return prevItem;
  }
  return null;
};
