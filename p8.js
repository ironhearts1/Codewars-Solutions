//Find The Parity Outlier
function findOutlier(integers) {
    let oddCnt = 0;
    let evenCnt = 0;
    let lastOdd;
    let lastEven;
    for (let i = 0; i < integers.length; i++) {
        if (Math.abs(integers[i]) % 2 == 0) {
            evenCnt++;
            lastEven = integers[i];
        }
        if (Math.abs(integers[i]) % 2 == 1) {
            oddCnt++;
            lastOdd = integers[i];
        }
    }
    if (oddCnt == 1) {
        return lastOdd;
    } else if (evenCnt == 1) {
        return lastEven;
    }
}

//Replace With Alphabet Position
function alphabetPosition(text) {
    let textA = text.toLowerCase().split("");
    let newtextA = [];
    for (let i = 0; i < textA.length; i++) {
        let alphValue = textA[i].charCodeAt() - 96;
        if (alphValue > 0 && alphValue < 27) {
            newtextA.push("" + alphValue);
        }
    }
    let str = newtextA.join(" ");
    return str;
}

//Sum of Digits / Digital Root
function digital_root(n) {
    let nary = String(n).split("");
    while (nary.length > 1) {
        let adder = 0;
        for (let i = 0; i < nary.length; i++) {
            adder = adder + Number(nary[i]);
        }
        nary = String(adder).split("");
    }
    if (nary.length == 1) {
        return Number(nary[0]);
    }
}

//Simple Pig Latin
function pigIt(str) {
    let strary = str.split(" ");
    let newstr = [];
    let punctuations = ["?", "!", ".", ","];
    for (let i = 0; i < strary.length; i++) {
        if (punctuations.includes(strary[i]) == false) {
            let word = strary[i];
            let pigged = word.slice(1) + word[0] + "ay";
            newstr[i] = pigged;
        } else if (punctuations.includes(strary[i]) == true) {
            newstr[i] = strary[i];
        }
    }
    return newstr.join(" ");
}

//Isograms
function isIsogram(str) {
    let newstr = str.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < newstr.length; i++) {
        let firstcount = 0;
        for (let j = 0; j < newstr.length; j++) {
            if (newstr[i] == newstr[j]) {
                firstcount++;
            }
            if (firstcount > 1) {
                count++;
            }
        }
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}
