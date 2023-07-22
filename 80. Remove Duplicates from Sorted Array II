var removeDuplicates = function(nums) {
  nums.sort((a, b) => { a - b; });
  let i = 0;
  let prevNum = null;
  let duplicatingTimes = 0;
  const duplicateTimes = 2;
  while (i < nums.length) {
    if (prevNum != null && prevNum == nums[i] && duplicatingTimes == duplicateTimes - 1) {
      nums.splice(i, 1);
    } else {
      if (prevNum != null && prevNum == nums[i]) {
        duplicatingTimes++;
      } else {
        duplicatingTimes = 0;
      }
      prevNum = nums[i];
      i++;
    }
  }
  return nums.length;
};
