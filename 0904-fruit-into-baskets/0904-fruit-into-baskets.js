/**
 * @param {number[]} nums
 * @return {number}
 */
var totalFruit = function(nums) {
    let low = 0;
    let high = 0;
    let map = new Map();
    let result = 0 

    for(high; high<nums.length;high++){
        fruit=nums[high]
        map.set(fruit,(map.get(fruit)||0)+1)

        while(map.size>2){
            let element = nums[low]
            map.set(element,map.get(element)-1)
            if(map.get(element)===0) map.delete(element);
            low++
        }
        result=Math.max(result,high-low+1)
    }
    return result
};