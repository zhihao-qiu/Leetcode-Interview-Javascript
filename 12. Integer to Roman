var intToRoman = function(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const thousandsDigit = Math.floor(num / 1000);
  const hundredsDigit = Math.floor((num % 1000) / 100);
  const tensDigit = Math.floor((num % 100) / 10);
  const onesDigit = num % 10;

  return thousands[thousandsDigit] + hundreds[hundredsDigit] + tens[tensDigit] + ones[onesDigit];    
};
