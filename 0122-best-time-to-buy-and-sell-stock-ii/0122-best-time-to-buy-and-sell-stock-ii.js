/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProfit = function(nums) {
    let profit=0;
    let buy =nums[0];
    for(let i =1;i<nums.length;i++){
        if(nums[i]>buy){
            profit+=(nums[i]-buy)
            buy=nums[i]
        }
        else{
            buy=nums[i]
        }
    }
    return profit
};