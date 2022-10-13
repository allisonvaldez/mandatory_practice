/*

1: Complete the 'repeat' function below. The function is expected to return a STRING. The function accepts following parameters:

    1. STRING str
    2. INTEGER multipler
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

/*

2: Complete the 'removeFromString' function below. The function is expected to return a STRING. The function accepts following parameters:

    1. STRING str
    2. INTEGER index
    3. INTEGER count
 */

function removeFromString(str, index, count) {
    let newString = str.split("");
    newString.splice(index, count);
    return newString.join("");
}

console.log(removeFromString("bob", 0, 1));

/*

3: Complete the 'reverse' function below. The function is expected to return an INTEGER_ARRAY. The function accepts INTEGER_ARRAY arr as parameter.

 */

function reverse(arr) {
    let newString = ""

    for (let i = arr.length - 1; i >= 0; i--) {
        newString += arr[i];
    }

    return newString;
    
}

console.log(reverse([1, 2, 3]));

/*

4: Complete the 'min' function below. The function is expected to return an INTEGER. The function accepts INTEGER_ARRAY arr as parameter.

 */

function min(arr) {

    for (let i in arr) {
        let newOrder = arr.sort();
        return newOrder[0];
    }
}

console.log(min([3, 2, 1]));