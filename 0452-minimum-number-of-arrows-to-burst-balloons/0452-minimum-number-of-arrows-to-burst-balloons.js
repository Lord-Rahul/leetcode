/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    
    points.sort((a, b) => a[0] - b[0]);
    
    let end1 = points[0][1];
    let result = 1;

    for (let i = 1; i < points.length; i++) {
        let start2 = points[i][0];
        let end2 = points[i][1];
        
        if (end1 < start2) {
            result++;
            end1 = end2;
        } else {
            end1 = Math.min(end1, end2);
        }
 
    }
    return result
}