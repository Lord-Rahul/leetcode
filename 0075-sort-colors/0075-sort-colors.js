/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red=0
    let white=0
    let blue=0
    count=0
    for (let i =0 ; i<nums.length;i++){
        if(nums[i]===0)red++
        else if(nums[i]===1)white++
        else blue++
    }
    while(red ||white||blue){
        if(red){
            nums[count]=0
            red--
            count++
        }
        else if(white){
            nums[count]=1
            count++
            white--
        }
        else if(blue){
            nums[count]=2
            count++
            blue--
        }
        else return nums
    }
    
};