var longestConsecutive = function(nums) {
  if (!nums.length || !nums) return 0;

  const sortedNums = nums.sort((a, b) => a - b);
  let consectiveNums = [sortedNums[0]];
  let maxLength = 0;

  for (let i = 0; i < sortedNums.length; i++) {
    if (consectiveNums[consectiveNums.length - 1] + 1 == sortedNums[i]) {
      consectiveNums.push(sortedNums[i]);
    } else {
      if (consectiveNums[consectiveNums.length - 1] !== sortedNums[i]) {
        if (maxLength < consectiveNums.length) maxLength = consectiveNums.length;
        consectiveNums = [sortedNums[i]];
      }
    }
  }
  if (maxLength < consectiveNums.length) maxLength = consectiveNums.length;

  return maxLength;
};
