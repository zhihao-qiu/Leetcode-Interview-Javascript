var canConstruct = function(ransomNote, magazine) {
  while (ransomNote || ransomNote.length > 0) {
    const letter = ransomNote.slice(0, 1);

    if (!magazine.includes(letter)) return false;
    magazine = magazine.slice(0, magazine.indexOf(letter)) + magazine.slice(magazine.indexOf(letter) + 1);
    ransomNote = ransomNote.slice(1);
  }
  return true;
};