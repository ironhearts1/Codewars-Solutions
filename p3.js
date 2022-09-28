//Sum of positive
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

//Who likes it?
function likes(names) {
    // TODO
    let whoLikes = "";

    if (names.length == 0) {
        whoLikes = "no one";
    } else if (names.length == 1) {
        whoLikes = names[0];
    } else if (names.length == 2) {
        whoLikes = names[0] + " and " + names[1];
    } else if (names.length == 3) {
        whoLikes = names[0] + ", " + names[1] + " and " + names[2];
    } else whoLikes = names[0].concat(", ", names[1], " and ", names.length - 2, " others");

    if (names.length <= 1) {
        return whoLikes + " likes this";
    } else {
        return whoLikes + " like this";
    }
}

//Stop gninnipS My sdroW!
function spinWords(string) {
    // split the string
    // test if the word is long enough
    // create a new array to put flipped words in
    // bring two arrays together or switch the two off and the concat

    let newSent = string.split(" ");
    for (let i = 0; i < newSent.length; i++) {
        if (newSent[i].length >= 5) {
            let newWordary = newSent[i].split("");
            let newWordrev = newWordary.reverse();
            let newNewword = newWordrev.join("");
            newSent[i] = newNewword;
        }
    }
    return newSent.join(" ");
}

//Square Every Digit
function squareDigits(num) {
    let newNums = num.toString().split("");
    for (let i = 0; i < newNums.length; i++) {
        newNums[i] = parseInt(newNums[i]) ** 2;
    }
    let output = parseInt(newNums.join(""));
    return output;
}

//Highest and Lowest
function highAndLow(numbers) {
    // ...
    let numbersNew = numbers.split(" ");
    let high = Math.log(0);
    let low = Infinity;
    for (let i = 0; i < numbersNew.length; i++) {
        if (parseInt(numbersNew[i]) > high) {
            high = parseInt(numbersNew[i]);
        }
        if (parseInt(numbersNew[i]) < low) {
            low = parseInt(numbersNew[i]);
        }
    }
    let returned = high + " " + low;
    return returned;
}
