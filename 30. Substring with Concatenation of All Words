var findSubstring = function(s, words) {
  const checkLength = words[0].length;
  const positionArray = [];
  let blnCheckResult = true;
  let [i, j] = [0, 0];
  while (i < s.length - checkLength * words.length + 1) {
    const regex = new RegExp(`.{1,${checkLength}}`, 'g');
    const arrayToCheck = s.slice(i, i + words.length * checkLength).match(regex);

    j = 0;
    blnCheckResult = true;

    while (j < words.length) {
      if (!arrayToCheck.includes(words[j])) {
        blnCheckResult = false;
        break;
      }
      arrayToCheck.splice(arrayToCheck.indexOf(words[j]), 1);
      j++;
    }
    if (blnCheckResult) positionArray.push(i);
    i++;
  }
  return positionArray;
};
