/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === m ? Infinity : nums1[partitionX];

        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === n ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {

            if ((m + n) % 2 === 1) {
                return Math.max(maxLeftX, maxLeftY);
            }

            return (
                Math.max(maxLeftX, maxLeftY) +
                Math.min(minRightX, minRightY)
            ) / 2;
        }

        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        }

        else {
            low = partitionX + 1;
        }
    }
};