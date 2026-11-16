/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum is strictly in the right half
            left = mid + 1;
        } else {
            // Minimum is at mid or in the left half
            right = mid;
        }
    }

    // When left === right, we have converged on the minimum element
    return nums[left];
};