// Problem: Best Time to Buy and Sell Stock
// You are given an array where each element represents the stock price on a specific day. Your task is to determine the maximum profit you can achieve by:

// Buying the stock on one day,
// Selling it on a later day.
// You can only make one transaction (buy once, sell once). If no profit is possible, return 0.

// Goal:
//Find the largest difference between a later day’s price and an earlier day’s price (sell - buy), where the buy happens before the sell.
function maxProfit(data) {
  let minprice = data[0];
  let maxProfit = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] < minprice) {
      minprice = data[i];
    } else {
      let profit = data[i] - minprice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
