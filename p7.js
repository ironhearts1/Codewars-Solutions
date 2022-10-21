//find the missing letter
function findMissingLetter(array) {
    let missingChar;
    for (let i = 0; i < array.length - 1; i++) {
        let currentChar = array[i].charCodeAt(0);
        let nextChar = array[i + 1].charCodeAt(0);
        if (nextChar - currentChar !== 1) {
            missingChar = currentChar + 1;
        }
    }
    return String.fromCharCode(missingChar);
}

//odd or even
function oddOrEven(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    if (total % 2 !== 0) {
        return "odd";
    } else {
        return "even";
    }
}

//Reverse Words
function reverseWords(str) {
    let strAry = str.split(" ");
    let finalAry = [];
    for (let i = 0; i < strAry.length; i++) {
        let wordAry = [];
        for (let j = strAry[i].length - 1; j >= 0; j--) {
            wordAry.push(strAry[i][j]);
        }
        finalAry.push(wordAry);
    }
    return finalAry.map((e) => e.join("")).join(" ");
}

//RGB to Hex Conversion
function rgb(r, g, b) {
    let rhex = r.toString(16);
    let ghex = g.toString(16);
    let bhex = b.toString(16);
    rhex = rhex.toUpperCase();
    ghex = ghex.toUpperCase();
    bhex = bhex.toUpperCase();
    if (rhex == "0" || r < 0) {
        rhex = "00";
    }
    if (ghex == "0" || g < 0) {
        ghex = "00";
    }
    if (bhex == "0" || b < 0) {
        bhex = "00";
    }
    if (r > 255) {
        rhex = "FF";
    }
    if (g > 255) {
        ghex = "FF";
    }
    if (b > 255) {
        bhex = "FF";
    }
    console.log(rhex.length);
    if (rhex.length == 1) {
        rhex = "0" + rhex;
    }
    if (ghex.length == 1) {
        ghex = "0" + ghex;
    }
    if (bhex.length == 1) {
        bhex = "0" + bhex;
    }

    let final = rhex.concat(ghex).concat(bhex);
    return final;
}

// Sum of the first nth term of Series
function SeriesSum(n) {
    let start = 1 + 1 / 4;
    if (n == 0) {
        return "0.00";
    }
    if (n == 1) {
        return "1.00";
    }
    if (n == 2) {
        return "1.25";
    }
    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            start = start + 1 / (4 + 3 * (i - 2));
        }
        return start.toFixed(2).toString();
    }
}
