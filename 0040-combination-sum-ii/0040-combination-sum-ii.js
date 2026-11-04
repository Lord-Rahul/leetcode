/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];
    let path = [];

    function backtrack(start, remaining) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // No need to explore further
            if (candidates[i] > remaining) {
                break;
            }

            path.push(candidates[i]);

            // Move to i + 1 because each element can be used once
            backtrack(i + 1, remaining - candidates[i]);

            // Backtrack
            path.pop();
        }
    }

    backtrack(0, target);

    return result;
};