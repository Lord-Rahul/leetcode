
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;

    let result = [];

    while (i < firstList.length && j < secondList.length) {

        let start = Math.max(firstList[i][0], secondList[j][0]);
        let end = Math.min(firstList[i][1], secondList[j][1]);

        if (start <= end) {
            result.push([start, end]);
        }

        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};
