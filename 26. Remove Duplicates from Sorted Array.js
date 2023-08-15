var removeDuplicates = function(nums) {
  nums.sort((a, b) => { a - b; });
  let i = 0;
  let prevNum = null;
  while (i < nums.length) {
    if (prevNum != null && prevNum == nums[i]) {
      nums.splice(i, 1);
    } else {
      prevNum = nums[i];
      i++;
    }
  }
  return nums.length;
};
