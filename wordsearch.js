const transpose = require('./transpose.js');

const wordSearch = (letters, word) => { 
    let newWord = word.toUpperCase();
    const transposedMatrix = transpose(letters)
    // console.log('t : ',transposedMatrix);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''))
    // console.log();
    for(l of verticalJoin) {
        if(l.includes(newWord)) return true;
        if(l.split('').reverse().join('').includes(newWord)) return true;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(newWord)) return true
        if(l.split('').reverse().join('').includes(newWord)) return true;

    }
    return false;
}

// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'eys'))

module.exports = wordSearch