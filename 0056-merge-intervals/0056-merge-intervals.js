/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (nums) {
    nums.sort((a, b) => a[0] - b[[0]])
    let start1 = nums[0][0];
    let end1 = nums[0][1]
    let result=[];
    let n=nums.length
    for (let i = 1; i < n; i++) {
        let start2 = nums[i][0]
        let end2 = nums[i][1]
        if(end1>=start2){
            end1=Math.max(end1,end2)
            continue
        }
        result.push([start1,end1])
        start1=start2;
        end1=end2;

    }
    result.push([start1,end1])
    return result
};