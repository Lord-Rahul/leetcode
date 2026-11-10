
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1]);

    let pickups = trips.map(t => [t[1], t[0]]);
    let drops = trips.map(t => [t[2], t[0]]);

    drops.sort((a, b) => a[0] - b[0]);

    let i = 0;
    let j = 0;
    let passengers = 0;

    while (i < trips.length) {

        while (j < drops.length && drops[j][0] <= pickups[i][0]) {
            passengers -= drops[j][1];
            j++;
        }

        passengers += pickups[i][1];

        if (passengers > capacity) return false;

        i++;
    }

    return true;
};
