//Complementary DNA
function DNAStrand(dna) {
    let dnaAry = dna.split("");
    let dnaAryFinal = [];
    for (let i = 0; i < dnaAry.length; i++) {
        if (dnaAry[i] == "A") {
            dnaAryFinal.push("T");
        }
        if (dnaAry[i] == "T") {
            dnaAryFinal.push("A");
        }
        if (dnaAry[i] == "C") {
            dnaAryFinal.push("G");
        }
        if (dnaAry[i] == "G") {
            dnaAryFinal.push("C");
        }
    }
    return dnaAryFinal.join("");
}

//Credit Card Mask
// return masked string
function maskify(cc) {
    let ccAry = cc.split("");
    let newAry1 = [];
    let newAry2 = [];
    for (let i = 0; i < ccAry.length - 4; i++) {
        newAry1.push("#");
    }
    for (let j = ccAry.length - 4; j < ccAry.length; j++) {
        newAry2.push(ccAry[j]);
    }
    let final = newAry1.concat(newAry2);
    return final.join("");
}

//Growth of a Population
function nbYear(p0, percent, aug, p) {
    let pop = p0;
    let years = 0;
    do {
        let added = pop * (percent / 100) + aug;
        years++;
        pop = pop + added;
    } while (pop < p);
    return years;
}

//Opposite number
function opposite(number) {
    let newNum = number * -1;
    return newNum;
}

//Tribonacci Sequence
function tribonacci(signature, n) {
    let sequen = [];
    for (let i = 0; i < n; i++) {
        if (i < 3) {
            sequen.push(signature[i]);
        } else {
            let temp = 0;
            for (let j = 1; j < 4; j++) {
                temp = temp + sequen[i - j];
            }
            sequen.push(temp);
        }
    }
    return sequen;
}
