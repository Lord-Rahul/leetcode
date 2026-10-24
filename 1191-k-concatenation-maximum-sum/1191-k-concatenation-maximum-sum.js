
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
    const MOD = 1000000007;

    let totalSum = 0;
    for (const num of arr) {
        totalSum += num;
    }

    let current = 0;
    let best = 0;

    const n = arr.length;
    const limit = k === 1 ? n : 2 * n;

    for (let i = 0; i < limit; i++) {
        current = Math.max(0, current + arr[i % n]);
        best = Math.max(best, current);
    }

    if (k > 2 && totalSum > 0) {
        best += (k - 2) * totalSum;
    }

    return best % MOD;
};
