//Counting Duplicates
function duplicateCount(text) {
    //turning string into array
    let ary = text.split("");
    //creating an array to store already seen duplicate values and to calculate count
    let done = [];
    //iterate over the loop to choose inital comparison letter
    for (let i = 0; i < ary.length; i++) {
        //if the letter being compared is already in the duplicate value array then it skips that position
        if (done.includes(ary[i].toLowerCase())) {
            continue;
        }
        // if it isn't it begins to loop over the array starting at one index past
        // the index the previous loops was on to find duplicates
        else {
            for (let j = i + 1; j < ary.length; j++) {
                //if the values being compared match then a duplicate has been located and is stored in the array and the second loop is exited
                if (ary[i].toLowerCase() == ary[j].toLowerCase()) {
                    done.push(ary[i].toLowerCase());
                    break;
                }
            }
        }
    }
    // returns the length of the duplicate array
    return done.length;
}

//List Filtering
function filter_list(l) {
    let goodAry = [];
    for (let i = 0; i < l.length; i++) {
        if (Number.isFinite(l[i])) {
            goodAry.push(l[i]);
        }
    }
    return goodAry;
}

//Create Phone Number
function createPhoneNumber(numbers) {
    let PNum1 = [];
    let PNum2 = [];
    for (let i = 0; i < 5; i++) {
        if (i == 0) {
            PNum1.push("(");
        } else if (i > 0 && i < 4) {
            PNum1.push(numbers[i - 1]);
        } else if (i == 4) {
            PNum1.push(")");
        }
    }
    for (let j = 0; j < 8; j++) {
        if (j < 3) {
            PNum2.push(numbers[j + 3]);
        } else if (j == 3) {
            PNum2.push("-");
        } else {
            PNum2.push(numbers[j + 2]);
        }
    }
    let NumFinal = PNum1.join("") + " " + PNum2.join("");
    return NumFinal;
}

//Persistent Bugger.
function persistence(num) {
    let numA = String(num).split("");
    let counter = 0;
    while (numA.length > 1) {
        let temp = 1;
        for (let i = 0; i < numA.length; i++) {
            temp = temp * parseInt(numA[i]);
        }
        counter++;
        numA = String(temp).split("");
    }
    return counter;
}

//Exes and Ohs
function XO(str) {
    let strA = str.split("");
    let xcnt = 0;
    let ocnt = 0;
    for (let i = 0; i < strA.length; i++) {
        if (strA[i].toLowerCase() == "x") {
            xcnt++;
        }
        if (strA[i].toLowerCase() == "o") {
            ocnt++;
        }
    }
    if (xcnt == ocnt) {
        return true;
    } else {
        return false;
    }
}
