var evalRPN = function(tokens) {
  let result = null;
  let i = 0;
  const unchecked = [];
  const operator = { '+': '+', '-': '-', '*': '*', '/': '/' };

  while (i < tokens.length) {
    if (tokens[i] in operator) {
      const num2 = unchecked.pop();
      const num1 = unchecked.pop();
      switch (tokens[i]) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = Math.trunc(num1 / num2);
          break;
      }
      unchecked.push(result);
    } else {
      unchecked.push(parseInt(tokens[i]));
    }
    i++;
  }
  return unchecked[0];
};
