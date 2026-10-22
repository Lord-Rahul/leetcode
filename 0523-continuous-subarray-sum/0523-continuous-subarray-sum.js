/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let prefix = new Map(); // %: i
    let sum = 0;

    prefix.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const l = sum % k;

        if (prefix.has(l)) {
            if (i - prefix.get(l) >= 2) {
                return true;
            }
        } else {
            prefix.set(l, i);
        }
    }
    return false;
};