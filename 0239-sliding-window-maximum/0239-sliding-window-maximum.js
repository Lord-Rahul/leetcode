/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let low = 0;
    let result = [];
    let deque = [];


    for (let high = 0; high < nums.length; high++) {
        while (deque.length && nums[high] > deque[deque.length - 1]) {
            deque.pop()
        }
        deque.push(nums[high])

        if (high >= k - 1) {
            result.push(deque[0]);

            if (nums[low] == deque[0]) {
                deque.shift();

            }
            low++
        }
    }
    return result
};
