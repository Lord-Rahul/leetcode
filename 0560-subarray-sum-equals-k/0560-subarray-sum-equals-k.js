/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = 0;
    let map = new Map()
    let result = 0
    map.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        let target = sum - k
        if (map.has(target)) {
            result += map.get(target);
        }
        map.set(sum, (map.get(sum) || 0) + 1);

    }
    return result
};