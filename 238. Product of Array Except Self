var productExceptSelf = function(nums) {
  const numsLen = nums.length;
  const prefixArr = new Array(numsLen);
  const suffixArr = new Array(numsLen);
  const answerArr = new Array(numsLen);
  // produce an array of prefix
  prefixArr[0] = 1;
  for (let i = 1; i < numsLen; i++) {
    prefixArr[i] = (nums[i - 1] * prefixArr[i - 1]);
  }

  // produce an array of suffix
  suffixArr[numsLen - 1] = 1;
  for (let i = numsLen - 2; i >= 0; i--) {
    suffixArr[i] = (nums[i + 1] * suffixArr[i + 1]);
  }

  // producce an array of prefix * suffix, to return
  for (let i = 0; i < numsLen; i++) {
    answerArr[i] = prefixArr[i] * suffixArr[i];
  }

  return answerArr; 
};
