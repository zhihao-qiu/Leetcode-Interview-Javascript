var lengthOfLongestSubstring = function(s) {
  let currentLongestString = "";
  let longestString = "";
  let currentIndex = 0;
  if (!s.length) return 0;

  while (currentIndex < s.length) {
    if (currentIndex === 0) {
      currentLongestString += s[currentIndex];
      longestString = currentLongestString;
    } else if (currentIndex == s.length - 1) {
      if (!currentLongestString.includes(s[currentIndex])) {
        currentLongestString += s[currentIndex];
      }
      if (longestString.length < currentLongestString.length) longestString = currentLongestString;
    }
    else {
      if (!currentLongestString.includes(s[currentIndex])) {
        currentLongestString += s[currentIndex];
      } else {
        if (longestString.length < currentLongestString.length) longestString = currentLongestString;
        currentLongestString = currentLongestString.slice(currentLongestString.indexOf(s[currentIndex]) + 1, currentLongestString.length) + s[currentIndex];
      }
    }

    currentIndex++;
  }
  return longestString.length;
};
