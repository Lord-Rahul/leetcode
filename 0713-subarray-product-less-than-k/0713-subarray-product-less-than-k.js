/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let product = 1;
    let result = 0;
    let low = 0;

    for (let high = 0; high < nums.length; high++) {
        product *= nums[high];

        while (product >= k) {
            product /= nums[low];
            low++;
        }

        result += high - low + 1;
    }

    return result;
};