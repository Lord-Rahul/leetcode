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
            let fruit=hashmap.get(nums[low])
            hashmap.set(nums[low],fruit-1)
            if(fruit-1===0) hashmap.delete(nums[low])
            low++
        }
        result=Math.max(result,high-low+1)
    }
    return result
};