const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false
    }
    const newArray = [];
    for (let x = 0; x < letters.length; x++) {
        newArray[x] = [];
        for (let y = 0; y < letters.length; y++) {
        newArray[x][y] = letters[y][x];
        }
      }
    const verticalJoin = newArray.map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))
   
    for (l of horizontalJoin) {
        for (k of verticalJoin) {
        if (l.includes(word) || k.includes(word)) return true;
        }
    }
    for (l of horizontalJoin) {
        for (k of verticalJoin) {
        if (!l.includes(word) || !k.includes(word)) return false;
        }
    }
}
module.exports = wordSearch


    // for (l of verticalJoin) {
    //     if (l.includes(word)) return true;
    // }
    // for (l of verticalJoin) {
    //     if (!l.includes(word)) return false;
    // }


    // const verticals = [];
    // for (let row = 0; row < rowLength; row++) {
    //     for (let column = 0; column < letters.length; column++) {
    //      verticals.push(column);
    //     }
    // }

        
        // if (hasHor === true || hasVer === true) {
        //     return true;
        // } else {
        //     return false;
        // }
    

    // console.log(verticals);
    // const verticalJoin = verticals.join('');
    // for (l of verticalJoin) {
    //     if (l.includes(word)) return true
    // }
    // for (l of verticalJoin) {
    //     if (!l.includes(word)) return false
    // }

//     const verticalJoin = verticals.map(ls => ls.join(''));
//     for (l of verticalJoin) {
//         if (l.includes(word)) hasVer = true;
//     }
//     for (l of verticalJoin) {
//         if (!l.includes(word)) hasVer = false;
//     }
//     if (hasHor === true || hasVer === true) {
//         return true;
//     } else {
        // return false;
//     }
// }







// check to find horizontally and vertically 
// return true if found and false if not found
// fix existing code
// add test to check if empty array
// add test for if word is vertical

//OPTIONAL
//test for backwards and diagonal