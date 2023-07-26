var longestCommonPrefix = function(strs) {
  // sort the array according to the alphabeical order
  strs.sort();

  // no need to compare the entire array, but only the first one and the last one
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] != strs[strs.length - 1][i]) return strs[0].slice(0, i);
  }
  return strs[0];
};
