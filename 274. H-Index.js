var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  for (let i = citations.length - 1; i >= 0; i--) {
    if (i + 1 <= citations[i]) return i + 1;
  }
  return 0;
};
