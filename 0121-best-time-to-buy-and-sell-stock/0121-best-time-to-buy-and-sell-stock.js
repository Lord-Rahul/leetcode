/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // update lowest buy price
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // update maximum profit
        }
    }

    return maxProfit;
};