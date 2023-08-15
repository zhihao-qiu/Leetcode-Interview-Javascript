var reverseWords = function(s) {
  s = s.split(" ").filter((val) => val != '');
  return s.reverse().join(" ")  
};
