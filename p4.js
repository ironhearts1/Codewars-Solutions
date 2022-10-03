//Array.diff
function arrayDiff(a, b) {
    let goodNums = [];
    if (b.length == 0) {
        return a;
    }
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) == false) {
            goodNums.push(a[i]);
        }
    }
    return goodNums;
}

//Mumbling
function accum(s) {
    // your code
    let string = "";
    for (let i = 0; i < s.length; i++) {
        let counter = 0;
        if (counter <= i) {
            if (counter == 0) {
                string = string + s.charAt(i).toUpperCase();
                counter++;
                for (let j = 0; j < i; j++) {
                    string = string + s.charAt(i).toLowerCase();
                }
                counter++;
            }
        }
        if (i !== s.length - 1) {
            string = string + "-";
        }
    }
    return string;
}

//Descending Order
function descendingOrder(n) {
    let strN = String(n);
    let ary = strN.split("").sort();
    let arysort = ary.reverse();
    return parseInt(arysort.join(""));
}

//Bit Counting
var countBits = function (n) {
    let bi = n.toString(2);
    let aryBi = String(bi).split("");
    let finalnum = 0;
    for (let i = 0; i < aryBi.length; i++) {
        finalnum += parseInt(aryBi[i]);
    }
    return finalnum;
};

//Get the Middle Character
function getMiddle(s) {
    let SEven1 = s[s.length / 2 - 1];
    let SEven2 = s[s.length / 2];
    let SOdd = s[(s.length - 1) / 2];
    if (s.length % 2 == 0) {
        return SEven1.concat(SEven2);
    } else if (s.length % 2 == 1) {
        return SOdd;
    }
}
