/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openMap = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
    ]);
    const closeMap = new Map([
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]);
    const stack = [];
  
    for (let i = 0; i < s.length; i += 1) {
      if (openMap.get(s[i])) {
        stack.push(s[i]);
      } else {
        const item = stack.pop();
  
        if (item !== closeMap.get(s[i])) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };