/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = 0
    let len = height.length
    let m = len - 1
    let n_max = 0
    let m_max = 0
    let water = 0

    while (n < m) {
        if (height[n] <= height[m]) {
            if (height[n] >= n_max) n_max = height[n]
            water += (n_max - height[n])
            n++
        } else {
            if(height[m]>=m_max) m_max=height[m]
            water +=(m_max-height[m])
            m--
        }

    }
    return water
};