/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        //if the buy price is greater than the current -> replace buy with current to get the lower buy price
        if (buyPrice > prices[i]) {
            buyPrice = prices[i]
        }
        //then calculate the profit
        profit = Math.max(profit, prices[i] - buyPrice)
    }
    return profit
};


 const maxProfit = (prices) => {
    //two pointers l being buy and r being sell
    let max = 0;
    let left = 0;
    let right = 1;

    while(right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            max = Math.max(profit, max)
        } else {
            left = right
        }
        right++
    }
    return max
}


//time is O(n), space is O(1)
