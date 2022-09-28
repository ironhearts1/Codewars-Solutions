// Square(n) Sum
function squareSum(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n * n;
    }

    return sum;
}

// You're a square!
var isSquare = function (n) {
    if (Math.sqrt(n) % 1 != 0) {
        return false; // fix me
    } else {
        return true;
    }
};

//Duplicate Encoder
function duplicateEncode(word) {
    // ...
    var result = "";
    // loops thru each letter
    for (let c of word) {
        var count = 0;
        //compares each letter and adds to count
        for (let j of word) {
            if (j.toLowerCase() == c.toLowerCase()) {
                count++;
            }
        }
        // gives output based on count
        if (count > 1) {
            result += ")";
        } else {
            result += "(";
        }
    }
    return result;
}

//Take a Ten Minutes Walk
function isValidWalk(walk) {
    //insert brilliant code here
    // setting initial position
    let x = 0;
    let y = 0;
    // first if input route is less than 10 minutes
    if (walk.length == 10) {
        //then calculating travel direction
        for (let i of walk) {
            if (i == "n") {
                y++;
            }
            if (i == "s") {
                y--;
            }
            if (i == "w") {
                x--;
            }
            if (i == "e") {
                x++;
            }
        }
        //rejects any input too long or too short
    } else {
        return false;
    }
    // checks if final position is correct
    if (x == 0 && y == 0) {
        return true;
    } else {
        return false;
    }
}

//Return Negative
function makeNegative(num) {
    // Code?
    if (num < 0) return num;
    else return num * -1;
}
