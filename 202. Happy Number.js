var isHappy = function(n) {
  const encountered = [n];
  while (n !== 1) {
    n = squreSum(n);
    if (encountered.includes(n)) {
      return false;
    } else {
      encountered.push(n);
    }
  }
  return true
};

const squreSum = (n) => {
  let result = 0;
  const strNum = n.toString();
  const length = strNum.length;
  for (let i = 0; i < length; i++) {
    result += Math.pow(strNum[i], 2);
  }
  return result;
};

