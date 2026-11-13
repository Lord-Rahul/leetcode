/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    let result = [];
    let path = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < s.length; i++) {
            if (isPalindrome(s, start, i)) {
                path.push(s.substring(start, i + 1));

                backtrack(i + 1);

                path.pop();
            }
        }
    }

    backtrack(0);
    return result;
};
