const transpose = function(matrix) {
  // Put your solution here
 let width = matrix[0].length;
 let height = matrix.length;
 let resMatrix = []

 for(let i = 0; i < width; i++) {
    resMatrix[i]=[]
    for(let j = 0; j< height; j++){
      resMatrix[i][j] = matrix[j][i]
    }
 }
 return resMatrix;
};
// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

module.exports = transpose;

// expected logs

/*
1 1 1 1 
2 2 2 2 
3 3 3 3 
4 4 4 4
----
1 3 5 
2 4 6
----
1 
2 
3 
4 
5 
6 
7
*/