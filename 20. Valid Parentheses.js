var isValid = function(s) {
  const mapping = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const checking = (start, end) => {
    if (start >= end) return true;

    let i = start;
    let count = 0;
    while (i <= end) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        count++;
      } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
        count--;
      }

      if (!count) {
        if (mapping[s[start]] !== s[i]) {
          return false;
        } else {
          return checking(start + 1, i - 1) && checking(i + 1, end);
        }
      }
      i++;
    };
    return false;
  };

  if (s.length % 2) return false;
  return checking(0, s.length - 1);
};
