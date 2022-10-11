// 1:

/*
 * Complete the 'repeat' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING str
 *  2. INTEGER multipler
 */

function repeat(str, multipler) {
    let newString = "";
    
    while (multipler > 0) {
        newString += str
        multipler--;
    }
    return newString;
}

console.log(repeat("abc", 2));

// 2:

/*
 * Complete the 'removeFromString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING str
 *  2. INTEGER index
 *  3. INTEGER count
 */

function removeFromString(str, index, count) {
    let newString = str.split("");
    newString.splice(index, count);
    return newString.join("");
}

console.log(removeFromString("bob", 0, 1));