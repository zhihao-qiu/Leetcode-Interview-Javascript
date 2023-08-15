var rotate = function(nums, k) {
  let digits;
  if (k > nums.length) {
    digits = k % nums.length;
  } else {
    digits = k;
  }

  const tmpNums = nums.slice(nums.length - digits);
  nums.splice(nums.length - digits, digits);

  const rtnNums = tmpNums.concat(nums)
  nums.length = 0
  rtnNums.forEach((num) => nums.push(num))
};
