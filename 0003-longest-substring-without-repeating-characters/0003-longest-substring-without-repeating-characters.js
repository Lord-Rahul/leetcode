/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let seen = new Map();

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        if (seen.has(ch) && seen.get(ch) >= left) {
            left = seen.get(ch) + 1;
        }

        seen.set(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
