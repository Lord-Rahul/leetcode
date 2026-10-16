/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let high =0 ;
    let low=0;
    let zerocount=0
    let result=0;

    for (high;high<nums.length;high++){
        if(nums[high]===0){
            zerocount++
        }
        while(zerocount>k){
            if(nums[low]===0) zerocount--
            low++
        }

        result=Math.max(result,high-low+1)

    }
    return result
};