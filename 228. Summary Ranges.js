var summaryRanges = function(nums) {
  if (!nums.length) return [];
  const result = [];
  let [min, max] = [nums[0], nums[0]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == max + 1) {
      max = nums[i];
    } else if (nums[i] > max + 1) {
      if (min == max) {
        result.push(`${min}`);
      } else {
        result.push(`${min}->${max}`);
      }
      min = nums[i];
      max = nums[i];
    }
  }
  if (min == max) {
    result.push(`${min}`);
  } else {
    result.push(`${min}->${max}`);
  }
  return result;
};
