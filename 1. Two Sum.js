/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums || nums.length === 0) return [];

  const mapping = {};

  for (let i = 0; i < nums.length; i++) {

    if (mapping.hasOwnProperty(target - nums[i])) {
      return [mapping[target - nums[i]], i];
    } else {
      mapping[nums[i]] = i;
    }
  };
  return [];
};
nums = [2, 7, 11, 15], target = 9;
// nums = [3, 2, 4], target = 6;
// nums = [3, 3], target = 6;

console.log(twoSum(nums, target));