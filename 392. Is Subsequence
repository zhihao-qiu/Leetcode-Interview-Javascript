var isSubsequence = function(s, t) {
  let sIndex = 0;
  if (!s.length) return true;
  if (!t.length) return false;

  while (sIndex < s.length) {
    if (t.indexOf(s[sIndex]) == -1) return false;
    t = t.slice(t.indexOf(s[sIndex]) + 1, t.length);
    sIndex++;
  }
  return true;
};
