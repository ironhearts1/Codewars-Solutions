//Moving Zeros To The End
var moveZeros = function (arr) {
    // create two arrays
    let nonZeros = [];
    let zeros = [];
    //loop through array
    for (i = 0; i < arr.length; i++) {
        // store zeros in zero and non zeros in nonzero
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZeros.push(arr[i]);
        }
    }
    return nonZeros.concat(zeros);
};

//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
    let total = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            total += i;
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            total += i;
        }
    } else {
        return a;
    }
    return total;
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    //Code here
    let x = 0;
    let y = 0;
    let tempx = Infinity;
    let tempy = Infinity;
    let tempindex;
    for (let i = 0; i <= 1; i++) {
        if (i == 0) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] < tempx) {
                    tempx = numbers[j];
                    tempindex = j;
                } else {
                    continue;
                }
            }
            x = tempx;
        } else if (i == 1) {
            for (let h = 0; h < numbers.length; h++) {
                if ((numbers[h] < tempy && numbers[h] > x) || (h != tempindex && numbers[h] < tempy)) {
                    tempy = numbers[h];
                } else {
                    continue;
                }
            }
            y = tempy;
        }
    }
    return x + y;
}

//Decode the Morse code
decodeMorse = function (morseCode) {
    // get array of the words
    let newarr = morseCode.trim().split("   ");
    let str = "";
    //loop thru that array getting arrays for each word
    for (let i = 0; i < newarr.length; i++) {
        let temparr = newarr[i].split(" ");
        for (let j = 0; j < temparr.length; j++) {
            if (j != temparr.length - 1 || i == newarr.length - 1) {
                str += MORSE_CODE[temparr[j]];
            } else {
                str = str + MORSE_CODE[temparr[j]] + " ";
            }
        }
    }
    return str;
};

//Two to One
function longest(s1, s2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let final = [];
    for (let i = 0; i < arr1.length; i++) {
        if (final.includes(arr1[i]) == false) {
            final.push(arr1[i]);
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (final.includes(arr2[j]) == false) {
            final.push(arr2[j]);
        }
    }
    return final.sort().join("");
}
