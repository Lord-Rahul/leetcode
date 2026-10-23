/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let v1 = nums[i];
        let v2 = min * nums[i];
        let v3 = max * nums[i];

        max = Math.max(v1, Math.max(v2, v3));
        min = Math.min(v1, Math.min(v2, v3));


        result = Math.max(result, max);
    }

    return result;
};