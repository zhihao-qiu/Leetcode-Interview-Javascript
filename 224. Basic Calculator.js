/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const getPrecedence = (operator) => {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
  };

  const removeSpaces = (s) => {
    let result = '';
    let insideParentheses = false;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        insideParentheses = true;
        result += s[i];
      } else if (s[i] === ')') {
        insideParentheses = false;
        result += s[i];
      } else if (insideParentheses || s[i] !== ' ') {
        result += s[i];
      }
    }

    return result;
  };

  const preprocess = (s) => {
    s = s.replace(/ /g, '');
    s = s.replace(/\(-/g, '(0-');
    if (s[0] === '-') s = '0' + s;
    return s;
  };

  const infixToPostfix = (s) => {
    const outputQueue = [];
    const operatorStack = [];
    let currentNumber = '';

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!isNaN(char) || char === '.') {
        currentNumber += char;
      } else {
        if (currentNumber !== '') {
          outputQueue.push(currentNumber);
          currentNumber = '';
        }

        if (char === '(') {
          operatorStack.push(char);
        } else if (char === ')') {
          while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.pop();
        } else if (isOperator(char)) {
          while (
            operatorStack.length > 0 &&
            isOperator(operatorStack[operatorStack.length - 1]) &&
            getPrecedence(char) <= getPrecedence(operatorStack[operatorStack.length - 1])
          ) {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.push(char);
        }
      }
    }

    if (currentNumber !== '') {
      outputQueue.push(currentNumber);
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    return outputQueue;
  };

  const evaluatePostfix = (postfixExpression) => {
    const stack = [];
    for (const token of postfixExpression) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (isOperator(token)) {
        const op2 = stack.pop();
        const op1 = stack.pop();
        if (token === '+') stack.push(op1 + op2);
        if (token === '-') stack.push(op1 - op2);
        if (token === '*') stack.push(op1 * op2);
        if (token === '/') stack.push(Math.trunc(op1 / op2));
      }
    }
    return stack[0];
  };

  s = preprocess(s);
  const postfixExpression = infixToPostfix(s);
  return evaluatePostfix(postfixExpression);
};

