function solution(board) {

  let row = board.length;
  let column = board[0].length;
  if (row <= 1 || column <= 1) return 1
  let max = 0;
  if (board[0][0] == 1) max = 1;
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] >= 1) {
        let highL = board[i - 1][j - 1];
        let highR = board[i - 1][j];
        let rowL = board[i][j - 1];
        board[i][j] = Math.min(...[rowL, highL, highR]) + 1;
        if (max < board[i][j]) max = board[i][j];

      }
    }
  }

  return Math.pow(max, 2);

}