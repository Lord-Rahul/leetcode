/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentsum=-Infinity
    let result=-Infinity
    if(nums.length===1)return nums[0]
    for(let i =0 ; i<nums.length;i++){
        currentsum = Math.max(nums[i],currentsum+nums[i]);
        result=Math.max(result,currentsum)
    }
    return result
    
};