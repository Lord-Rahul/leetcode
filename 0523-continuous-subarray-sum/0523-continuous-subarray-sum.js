/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // Map stores: remainder -> earliest index where this remainder appeared
    const remainderMap = new Map();
    
    // Initialize for subarrays starting from index 0
    remainderMap.set(0, -1);
    
    let runningSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        let remainder = runningSum % k;
        
        // Handle negative remainders in JavaScript
        if (remainder < 0) {
            remainder += k;
        }
        
        if (remainderMap.has(remainder)) {
            // Check if the subarray length is at least 2
            if (i - remainderMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            // Only store the first occurrence to maximize the subarray length
            remainderMap.set(remainder, i);
        }
    }
    
    return false;
};