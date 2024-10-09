let a = "11"
let b = "9";


function add(a, b) {
    // make sure the input are string numbers (unsure if test cases had non string numbers)
    a = String(a);
    b = String(b);

    let arrayA = []
    let arrayB = [];
    let res = [];

    //find the difference in the two strings if they are not equal and add 0's as place holders into respective arrays
    let len = Math.abs(a.length - b.length)
    if (a.length > b.length) {
        for (let i = 0; i < len; i ++){
            arrayB.push(0)
        }
    } else if (b.length > a.length) {
        for (let i = 0; i < len; i ++) {
            arrayA.push(0)
        }
    }

    //then push each number of the string into each respective array

    arrayA = arrayA.concat(addArray(a))
    arrayB = arrayB.concat(addArray(b))


    //then using one array's length, push the sum of both arrays at each index
    for (let i = arrayA.length - 1; i >= 0 ; i--) {
        res.push(arrayA[i] + arrayB[i]);
        console.log(arrayB[i])
    }
    //then reverse and join it to return a string
  return res.reverse().join("")
// make sure A and B are both equal length strings with 0s at the front if needed
//     let targetLength = Math.max(a.length, b.length)
//     a = a.padStart(targetLength, '0')
//     b = b.padStart(targetLength, '0')

//     let result = ""
//     for (let i=0 ;i < targetLength; i++){
//         let next = parseInt(a[i]) + parseInt(b[i]);
//         result += String(next);
//     }

//     return result;
}


function addArray(str) {
    let res = [];
    for (let char of str) {
        res.push(parseInt(char))
    }
    return res
}


console.log((add(a, b)))
