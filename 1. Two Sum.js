var twoSum = function(nums, target) {
  let [left, right] = [0, nums.length - 1];
  let [num1, num2] = [null, null];
  const resultArray = [];

  if (!nums || nums.length === 0) return [];

  const sortedNums = nums.sort((a, b) => a - b);
  while (left <= right) {
    const result = sortedNums[left] + sortedNums[right];
    if (result == target) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] == sortedNums[left] && nums1==null) {

        }
      }
      resultArray = [sortedNums[left], sortedNums[right]];
    } else if (result > target) {
      right--;
    } else if (result < target) {
      left++;
    }
  }

  return [];
};

// nums = [2, 7, 11, 15], target = 9;
// nums = [3, 2, 4], target = 6;
nums = [3, 3], target = 6;

console.log(twoSum(nums, target));