/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let end = intervals[0][1];
    let count = 0;

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end2 = intervals[i][1];

        if (start < end) {
            count++;
        } else {
            end = end2;
        }
    }

    return count;
};