var wordPattern = function(pattern, s) {
  const pToSMapping = {};
  const sToPMapping = {};

  const sArray = s.split(" ");

  if (sArray.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!pToSMapping.hasOwnProperty(pattern[i]) && !sToPMapping.hasOwnProperty(sArray[i])) {
      pToSMapping[pattern[i]] = sArray[i];
      sToPMapping[sArray[i]] = pattern[i];
    } else {
      if (pToSMapping[pattern[i]] !== sArray[i] || sToPMapping[sArray[i]] !== pattern[i]) return false;
    }
  }
  return true;
};