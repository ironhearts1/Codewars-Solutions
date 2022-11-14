//Unique In Order
var uniqueInOrder = function (iterable) {
    let arr = [];
    let final = [];
    if (Array.isArray(arr) == false) {
        arr = iterable.split("");
    } else {
        arr = iterable;
    }
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length - 1) {
                if (arr[i] != arr[i + 1]) {
                    final.push(arr[i]);
                }
            } else if (i == arr.length - 1) {
                if (arr[i] != arr[i - 1]) {
                    final.push(arr[i]);
                }
            }
        }

        if (arr[arr.length - 2] == arr[arr.length - 1]) {
            final.push(arr[arr.length - 1]);
        }
    } else if (arr.length == 1) {
        final.push(arr[0]);
    } else if (arr.length == 0) {
        return final;
    }
    return final;
};

//Does my number look big in this?
function narcissistic(value) {
    let arr = String(value);
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + Math.pow(Number(arr[i]), arr.length);
        console.log(arr[i]);
    }
    if (value == total) {
        return true;
    } else {
        return false;
    }
}

//Valid Parentheses
function validParentheses(parens) {
    let openpars = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == "(") {
            openpars++;
        } else {
            openpars--;
            if (openpars < 0) {
                return false;
            }
        }
    }
    if (openpars === 0) {
        return true;
    } else {
        return false;
    }
}

//Human Readable Time
function humanReadable(seconds) {
    let mins = 0;
    let hours = 0;
    let finals = "";
    let finalm = "";
    let finalh = "";
    while (seconds > 59) {
        seconds = seconds - 60;
        mins++;
        if (mins == 60) {
            mins = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        finals = "0" + String(seconds);
    } else {
        finals = String(seconds);
    }
    if (mins < 10) {
        finalm = "0" + String(mins);
    } else {
        finalm = String(mins);
    }
    if (hours < 10) {
        finalh = "0" + String(hours);
    } else {
        finalh = String(hours);
    }
    return finalh + ":" + finalm + ":" + finals;
}

//Split Strings
function solution(str) {
    let strary = str.split("");
    let ary = [];
    let counter = 0;
    let temp = "";
    for (let i = 0; i < strary.length; i++) {
        if (i < strary.length - 1 || (i == strary.length - 1 && counter == 1)) {
            if (counter == 0) {
                temp = temp + strary[i];
                counter++;
                continue;
            } else if (counter == 1) {
                temp = temp + strary[i];
                ary.push(temp);
                temp = "";
                counter--;
                continue;
            }
        } else {
            temp = strary[i] + "_";
            ary.push(temp);
        }
    }
    return ary;
}
