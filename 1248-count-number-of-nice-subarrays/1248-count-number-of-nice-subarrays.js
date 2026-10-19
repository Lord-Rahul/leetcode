/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    // Helper function to find count of subarrays with AT MOST maxOdds odd numbers
    const atMost = (maxOdds) => {
        let low = 0;
        let count = 0;
        let result = 0;

        for (let high = 0; high < nums.length; high++) {
            if (nums[high] % 2 !== 0) {
                count++;
            }
            while (count > maxOdds) {
                if (nums[low] % 2 !== 0) {
                    count--;
                }
                low++;
            }
            // Add all valid subarrays ending at 'high'
            result += high - low + 1;
        }
        return result;
    };

    // Exactly K = At Most K - At Most (K - 1)
    return atMost(k) - atMost(k - 1);
};