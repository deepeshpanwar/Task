function countCombinations(coins, target) {
  const dp = Array(target + 1).fill(0);
  dp[0] = 1; 

  for (let coin of coins) {
    for (let i = coin; i <= target; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[target];
}


const testCases = [
  {
    n: 3,
    target: 13,
    coins: [5, 2, 4]
  },
  {
    n: 3,
    target: 28,
    coins: [2, 5, 4]
  },
  {
    n: 4,
    target: 28,
    coins: [1, 2, 4, 5]
  }
];

for (const test of testCases) {
  const result = countCombinations(test.coins, test.target);
  console.log(result);
}
