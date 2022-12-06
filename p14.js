//sum of a sequence
const sequenceSum = (begin, end, step) => {
    let start = begin;
    let count = 0;
    if (begin > end) {
        return count;
    } else if (begin == end) {
        return begin;
    }
    while (start <= end) {
        count = count + start;
        start = start + step;
        console.log(start, count);
    }
    return count;
};

//IP validation
function isValidIP(str) {
    let count = 0;
    let firstCheck = str.split(".");
    console.log(firstCheck);
    console.log(parseInt(firstCheck[1]));
    if (firstCheck.length != 4) {
        return false;
    }
    for (let j = 0; j < firstCheck.length; j++) {
        if (Number(firstCheck[j]).toString() != firstCheck[j]) {
            return false;
        }
        if (isNaN(parseInt(firstCheck[j])) === true) {
            return false;
        }
        if (Number(firstCheck[j]) > 255 || firstCheck[j] < 0) {
            return false;
        }
    }
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ".") {
            count = 0;
            continue;
        }
        count++;
        if (count > 3) {
            return false;
        }
    }
    return true;
}

// Make the Deadfish Swim
// Return the output array, and ignore all non-op characters
function parse(data) {
    let inputs = data.split("");
    let outputArr = [];
    let output = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === "i") {
            output++;
        } else if (inputs[i] === "d") {
            output--;
        } else if (inputs[i] === "s") {
            output = output * output;
        } else if (inputs[i] === "o") {
            outputArr.push(output);
        }
    }
    return outputArr;
}

//Good vs Evil
function goodVsEvil(good, evil) {
    let gArr = good.split(" ");
    let eArr = evil.split(" ");
    let gFinal = 0;
    let eFinal = 0;
    for (let i = 0; i < gArr.length; i++) {
        if (i == 0) {
            gFinal = gFinal + gArr[i] * 1;
        }
        if (i == 1) {
            gFinal = gFinal + gArr[i] * 2;
        }
        if (i == 2) {
            gFinal = gFinal + gArr[i] * 3;
        }
        if (i == 3) {
            gFinal = gFinal + gArr[i] * 3;
        }
        if (i == 4) {
            gFinal = gFinal + gArr[i] * 4;
        }
        if (i == 5) {
            gFinal = gFinal + gArr[i] * 10;
        }
    }
    for (let j = 0; j < eArr.length; j++) {
        if (j == 0) {
            eFinal = eFinal + eArr[j] * 1;
        }
        if (j == 1) {
            eFinal = eFinal + eArr[j] * 2;
        }
        if (j == 2) {
            eFinal = eFinal + eArr[j] * 2;
        }
        if (j == 3) {
            eFinal = eFinal + eArr[j] * 2;
        }
        if (j == 4) {
            eFinal = eFinal + eArr[j] * 3;
        }
        if (j == 5) {
            eFinal = eFinal + eArr[j] * 5;
        }
        if (j == 6) {
            eFinal = eFinal + eArr[j] * 10;
        }
    }

    if (gFinal > eFinal) {
        return "Battle Result: Good triumphs over Evil";
    }
    if (eFinal > gFinal) {
        return "Battle Result: Evil eradicates all trace of Good";
    }
    if (gFinal == eFinal) {
        return "Battle Result: No victor on this battle field";
    }
}

//Maximum Length Difference
function mxdiflg(a1, a2) {
    let max = 0;
    if (a1.length == 0 || a2.length == 0) {
        return -1;
    }
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            let check = Math.abs(a1[i].length - a2[j].length);
            if (check > max) {
                max = check;
            }
        }
    }
    return max;
}
