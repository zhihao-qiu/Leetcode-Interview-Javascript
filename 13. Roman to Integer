var romanToInt = function(s) {
  const symbol = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let totalNum = 0;
  for (let i = 0; i < s.length; i++) {
    totalNum += symbol[s[i]];
    switch (s[i]) {
      case "V":
        if (s[i - 1] == "I") totalNum -= 2 * symbol[s[i - 1]];
        break;
      case "X":
        if (s[i - 1] == "I") totalNum -= 2 * symbol[s[i - 1]];
        break;
      case "L":
        if (s[i - 1] == "X") totalNum -= 2 * symbol[s[i - 1]];
        break;
      case "C":
        if (s[i - 1] == "X") totalNum -= 2 * symbol[s[i - 1]];
        break;
      case "D":
        if (s[i - 1] == "C") totalNum -= 2 * symbol[s[i - 1]];
        break;
      case "M":
        if (s[i - 1] == "C") totalNum -= 2 * symbol[s[i - 1]];
        break;
    }
  }
  return totalNum;
};
