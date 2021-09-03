function number(matrix, row, column, num){
  for(let i = 0; i < 9; i++){
    let x = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let y = 3 * Math.floor(column / 3) +i % 3;
    if(matrix[row][i] === num || matrix [i][column] === num || matrix[x][y] === num){
      return false;
    }
  }
  return true;
}

module.exports = function solveSudoku(matrix) {
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(matrix[i][j] === 0){
        for(let k = 1; k <= 9; k++){
          if(number(matrix, i, j, k)){
            matrix[i][j] = k;
            if(solveSudoku(matrix)){
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}


