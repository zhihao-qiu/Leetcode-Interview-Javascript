var fullJustify = function(words, maxWidth) {
  let currentWords = "";
  let wordsArray = [];

  for (let i = 0; i < words.length; i++) {
    if (!currentWords) {
      currentWords = words[i];
    } else if (currentWords.length + 1 + words[i].length <= maxWidth) {
      currentWords += " " + words[i];
    }
    else {
      wordsArray.push(formatString(currentWords, maxWidth));
      currentWords = words[i];
    }
  }
  // Last line, left-justified with no extra spaces between words
  currentWords += " ".repeat(maxWidth - currentWords.length);
  wordsArray.push(currentWords);

  return wordsArray;
};

const formatString = (str, maxWidth) => {
  const words = str.split(" ");
  const numWords = words.length;
  const totalSpaces = maxWidth - str.length + numWords - 1;

  if (numWords === 1) {
    // Only one word, left-justified with extra spaces added to the right
    return words[0] + " ".repeat(totalSpaces);
  }

  const regularSpace = " ".repeat(Math.floor(totalSpaces / (numWords - 1)));
  const extraSpaces = totalSpaces % (numWords - 1);

  let formattedStr = words[0];

  for (let i = 1; i < numWords; i++) {
    const spacesToAdd = i <= extraSpaces ? regularSpace + " " : regularSpace;
    formattedStr += spacesToAdd + words[i];
  }

  return formattedStr;
};
