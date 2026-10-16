/**
 * @param {number[]} nums
 * @return {number}
 */
var totalFruit = function(nums) {
    let low = 0 ;
    let high =0 ;
    let n= nums.length
    let hashmap = new Map
    let result=0;

    for (high; high<n;high++){
        hashmap.set(nums[high],(hashmap.get(nums[high]) || 0)+1);

        while(hashmap.size>2){
            hashmap.set(nums[low],hashmap.get(nums[low])-1)
            if(hashmap.get(nums[low])===0) hashmap.delete(nums[low])
            low++
        }
        result=Math.max(result,high-low+1)
    }
    return result
};