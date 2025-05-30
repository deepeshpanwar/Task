function maxPathSum(matrix, n, m) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let down = dp[i - 1][j];
      let leftDiag = j > 0 ? dp[i - 1][j - 1] : -Infinity;
      let rightDiag = j < m - 1 ? dp[i - 1][j + 1] : -Infinity;

      dp[i][j] = matrix[i][j] + Math.max(down, leftDiag, rightDiag);
    }
  }

  return Math.max(...dp[n - 1]);
}

const matrix = [
  [12, 22, 5, 0, 20, 18],
  [0, 2, 5, 25, 18, 17],
  [12, 10, 5, 4, 2, 1],
  [3, 8, 2, 20, 10, 8],
];

const n = matrix.length;
const m = matrix[0].length;

console.log(maxPathSum(matrix, n, m));
