var isIsomorphic = function(s, t) {
  const mappingSToT = {};
  const mappingTToS = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {

    if (!mappingSToT.hasOwnProperty(s[i]) && !mappingTToS.hasOwnProperty(t[i])) {
      mappingSToT[s[i]] = t[i];
      mappingTToS[t[i]] = s[i];
    } else {
      if (mappingSToT[s[i]] !== t[i] || mappingTToS[t[i]] !== s[i]) return false;
    }
  }
  return true;
};