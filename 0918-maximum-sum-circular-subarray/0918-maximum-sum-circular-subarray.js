/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let totalSum = 0;
    
    let curMax = 0;
    let maxSubarray = nums[0];
    
    let curMin = 0;
    let minSubarray = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        
  
        curMax = Math.max(val, curMax + val);
        maxSubarray = Math.max(maxSubarray, curMax);

      
        curMin = Math.min(val, curMin + val);
        minSubarray = Math.min(minSubarray, curMin);

        totalSum += val;
    }

    if (maxSubarray < 0) {
        return maxSubarray;
    }

    return Math.max(maxSubarray, totalSum - minSubarray);
};