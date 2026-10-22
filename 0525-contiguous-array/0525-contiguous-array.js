/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let zero = 0;
    let one = 0;
    let map = new Map();
    let n = nums.length;
    let result = 0;
    
    
    for (let i=0; i < n; i++) {
        if (nums[i] === 0) { zero++ } else { one++ }
        let difference = zero - one
        if (difference === 0) {
            result = Math.max(result, i + 1)
            continue

        }

        if(!map.has(difference)){
            map.set(difference,i)
        }
        else{
            let idx = map.get(difference)
            let leng=i-idx
            result=Math.max(leng,result)
        }
        

    }
    return result;

};