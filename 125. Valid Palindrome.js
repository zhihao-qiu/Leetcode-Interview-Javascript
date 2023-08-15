var isPalindrome = function(s) {
  // remove all punctuation marks and space
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  s = s.replace(regex, '').toLowerCase();
  // return true if blank or only 1 letter
  if (s.length < 2) return true;

  // check the index in the half
  middleIndex = Math.floor(s.length / 2);
  let i = 0;
  // if it's odd
  if (s.length % 2) {
    while (i <= middleIndex) {
      if (s[middleIndex + i] != s[middleIndex - i]) return false;
      i++;
    }
  } else {
    while (i < middleIndex) {
      if (s[middleIndex + i] != s[middleIndex - i - 1]) return false;
      i++;
    }
  }
  return true;
};
