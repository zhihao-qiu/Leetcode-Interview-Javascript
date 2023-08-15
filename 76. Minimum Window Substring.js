var minWindow = function(s, t) {
  const targetFreqMap = new Map();
  for (const char of t) {
    targetFreqMap.set(char, (targetFreqMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let requiredChars = targetFreqMap.size;
  let minWindowLength = Infinity;
  let minWindowStart = 0;

  while (right < s.length) {
    const rightChar = s[right];
    if (targetFreqMap.has(rightChar)) {
      targetFreqMap.set(rightChar, targetFreqMap.get(rightChar) - 1);
      if (targetFreqMap.get(rightChar) === 0) {
        requiredChars--;
      }
    }

    while (requiredChars === 0) {
      if (right - left + 1 < minWindowLength) {
        minWindowLength = right - left + 1;
        minWindowStart = left;
      }

      const leftChar = s[left];
      if (targetFreqMap.has(leftChar)) {
        targetFreqMap.set(leftChar, targetFreqMap.get(leftChar) + 1);
        if (targetFreqMap.get(leftChar) > 0) {
          requiredChars++;
        }
      }

      left++;
    }

    right++;
  }

  return minWindowLength === Infinity ? "" : s.slice(minWindowStart, minWindowStart + minWindowLength);
}
