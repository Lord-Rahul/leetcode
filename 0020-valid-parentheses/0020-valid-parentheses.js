/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    for (let char of s) {
        if (matchingBracket[char]) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (topElement !== matchingBracket[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }


    return stack.length === 0;
};