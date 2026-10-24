/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let onedelete = -Infinity
    let nodelete = nums[0]
    let result = nums[0]


    if (nums.length === 1) return nums[0];

    for (let i = 1; i < nums.length; i++) {
        let prevNodelete = nodelete;
        let prevOnedelete = onedelete;

        nodelete = Math.max(nums[i], prevNodelete + nums[i])

        onedelete = Math.max(prevOnedelete+nums[i], prevNodelete)
        result = Math.max(result, nodelete, onedelete)

    }
    return result
};