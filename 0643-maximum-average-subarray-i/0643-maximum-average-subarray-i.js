/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let low = 0;
    let high = k - 1;
    let result = -Infinity
    let average=0;

    let leng = nums.length

    if(leng===1)return nums[0]

    for (let i = 0; i <= high; i++) {
        average += nums[i]
        if (i === high) {
            average = average / k
        }

    }

    while (high <leng){
        result= Math.max(average,result);
        low++
        high++
        average=((average*k)-nums[low-1]+nums[high])/k
    }

    return result
    
};