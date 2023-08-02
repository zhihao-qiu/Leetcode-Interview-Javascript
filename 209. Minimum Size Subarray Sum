var minSubArrayLen = function(target, nums) {
  let [left, right, sum, minLength] = [0, 0, 0, nums.length + 1];

  for (right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLength <= nums.length ? minLength : 0;
};
