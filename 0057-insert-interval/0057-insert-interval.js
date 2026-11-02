/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length;
    let newArray = [];
    let init = false;

    for (let i = 0; i < n; i++) {
        let start = intervals[i][0];

        if (newInterval[0] < start && !init) {
            newArray.push(newInterval);
            init = true;
        }

        newArray.push(intervals[i]);
    }

    if (!init) {
        newArray.push(newInterval);
    }

    let result = [];

    let start1 = newArray[0][0];
    let end1 = newArray[0][1];

    for (let i = 1; i < newArray.length; i++) {
        let start2 = newArray[i][0];
        let end2 = newArray[i][1];

        if (start2 <= end1) {
            end1 = Math.max(end1, end2);
        } else {
            result.push([start1, end1]);
            start1 = start2;
            end1 = end2;
        }
    }

    result.push([start1, end1]);

    return result;
};