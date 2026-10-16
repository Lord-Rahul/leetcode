/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let low = 0;
    let high = 0;
    let n = s.length;
    let count = 0
    let f = new Array(256).fill(0);
    let result = 0

    for (high; high < n; high++) {
        let highchar=s.charCodeAt(high);
        f[highchar]++;

        count=Math.max(count,f[highchar]);

        while((high-low+1)-count>k){
            let lowchar=s.charCodeAt(low);
            f[lowchar]--;
            low++;
        }
        result=Math.max(result,high-low+1)

    }
    return result
};