/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;

    if (len1 > len2) return false;

    // Fixed size frequency array for 'a' to 'z' (26 characters)
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    // Count initial window frequencies
    for (let i = 0; i < len1; i++) {
        freq1[s1.charCodeAt(i) - 97]++;
        freq2[s2.charCodeAt(i) - 97]++;
    }

    // Slide the window over s2
    for (let i = 0; i < len2 - len1; i++) {
        if (areArraysEqual(freq1, freq2)) return true;

        // Add new character coming into the window
        freq2[s2.charCodeAt(i + len1) - 97]++;
        // Remove old character going out of the window
        freq2[s2.charCodeAt(i) - 97]--;
    }

    // Check for the last window
    return areArraysEqual(freq1, freq2);
};

// Helper function to compare two frequency arrays of size 26
const areArraysEqual = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};