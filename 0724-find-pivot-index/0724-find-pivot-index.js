/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left=0
    let sum=0
    for(let i =0 ; i<nums.length;i++){
        sum+=nums[i]
    }
    for (let i =0 ; i<nums.length;i++){
        
        right=sum-left-nums[i]
        if(left==right)return i
        left+=nums[i];
    }
    return -1
    
};