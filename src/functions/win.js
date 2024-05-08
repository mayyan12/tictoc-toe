export default function checkWin3_3(array) {
  const allSame = (arr) => arr.every((val) => val === arr[0] && val !== null);
  for (let i = 0; i < 3; i++) {
    if (allSame(array[i])) {
      console.log("winner", array);
      return array[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    const column = [array[0][i], array[1][i], array[2][i]];
    if (allSame(column)) {
      console.log("winner", array);
      return column[0];
    }
  }
  const diagonal1 = [array[0][0], array[1][1], array[2][2]];
  if (allSame(diagonal1)) {
    console.log("winner", array);
    return diagonal1[0];
  }
  const diagonal2 = [array[0][2], array[1][1], array[2][0]];
  if (allSame(diagonal2)) {
    console.log("winner", array);
    return diagonal2[0];
  }
  return null;
}

function checkWin(board, size, target) {
  const rows = board.length;
  const cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const mark = board[row][col];

      if (mark) {
        if (col <= cols - target && checkLine(board, row, col, 0, 1, target)) {
          return mark;
        }

        if (row <= rows - target && checkLine(board, row, col, 1, 0, target)) {
          return mark;
        }

        if (
          row <= rows - target &&
          col <= cols - target &&
          checkLine(board, row, col, 1, 1, target)
        ) {
          return mark;
        }

        if (
          row <= rows - target &&
          col >= target - 1 &&
          checkLine(board, row, col, 1, -1, target)
        ) {
          return mark;
        }
      }
    }
  }
  return null;
}

function checkLine(board, row, col, rowIncrement, colIncrement, target) {
  const mark = board[row][col];
  for (let i = 1; i < target; i++) {
    const newRow = row + i * rowIncrement;
    const newCol = col + i * colIncrement;

    if (board[newRow][newCol] !== mark) {
      return false;
    }
  }
  return true;
}
