/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [0];

    for (let i = 0; i < nums.length; i++) {
        this.prefix.push(this.prefix[i] + nums[i]);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};