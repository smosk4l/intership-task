const maxWidth = 50;
const ducks = [
  [3, 2],
  [5, 4],
  [7, 6],
  [2, 1],
  [8, 5],
  [4, 3],
  [6, 7],
  [9, 9],
  [1, 2],
  [5, 4],
  [7, 6],
  [8, 8],
  [3, 3],
  [4, 5],
  [6, 7],
  [2, 1],
  [1, 2],
  [5, 4],
  [8, 6],
  [9, 8],
];
const dp = new Array(maxWidth + 1).fill(0);
let maxHeight = 0;
for (let i = 0; i < ducks.length; i++) {
  const [height, width] = ducks[i];
  for (let j = maxWidth - width; j >= 0; j--) {
    if (j + width <= maxWidth) {
      dp[j + width] = Math.max(dp[j + width], dp[j] + height);
      maxHeight = Math.max(maxHeight, dp[j + width]);
    }
  }
}
console.log(maxHeight);
