/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let high = 0;
    if (s.length < t.length) return "";
    let low = 0;
    let need = new Map();
    let has = new Map();
    let result = ""
    let minlength = Infinity


    var compare = function (m1, m2) {
        for (const [key, value] of m1) {
            if ((m2.get(key) || 0) < value) return false;
        }
        return true;
    };

    for (let i = 0; i < t.length; i++) {
        let element = t[i]
        need.set(element, (need.get(element) || 0) + 1)
    }

    for (high; high < s.length; high++) {
        let element = s[high];
        has.set(element, (has.get(element) || 0) + 1)
        while (compare(need, has)) {
            let size = high - low + 1

            if (minlength > size) {
                minlength = size
                result = s.substring(low, high + 1);
            }
                let el = s[low]
                has.set(el, has.get(el) - 1)
                low++

        }
    }
    return result




};