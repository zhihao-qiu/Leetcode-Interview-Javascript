var groupAnagrams = function(strs) {
  const objMapping = {};
  const result = [];

  if (!strs || strs.length === 0) return result;

  for (let i = 0; i < strs.length; i++) {
    const resortedStr = strs[i].split('').sort().join('');
    if (!objMapping.hasOwnProperty(resortedStr)) objMapping[resortedStr] = [];
    objMapping[resortedStr].push(strs[i]);
  }

  Object.entries(objMapping).forEach(([key, value]) => { result.push(value); });
  return result;
};

