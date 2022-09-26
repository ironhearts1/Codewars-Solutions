//Printer Errors
function printerError(s) {
    // your code
    let string = s;
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 109 && string.charCodeAt(i) < 123) {
            counter++;
        }
    }
    return counter + "/" + string.length;
}

//Shortest Word
function findShort(s) {
    let words = s.split(" ");
    let smallest = 1000;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < smallest) {
            smallest = words[i].length;
        }
    }
    return smallest;
}

//String ends with?
function solution(str, ending) {
    // TODO: complete
    let string = str;
    let test = ending;
    let strend = string.substring(string.length - test.length);
    if (strend == test) {
        return true;
    } else {
        return false;
    }
}

//Disemvowel Trolls
function disemvowel(str) {
    let newstr = str;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < newstr.length; i++) {
        if (vowels.includes(newstr[i].toLowerCase())) {
            newstr = newstr.replace(newstr[i], "");
            i--;
        }
    }
    return newstr;
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
    //...
    let strarray = this.split(" ");
    for (let i = 0; i < strarray.length; i++) {
        strarray[i] = strarray[i].charAt(0).toUpperCase() + strarray[i].slice(1);
    }
    return strarray.join(" ");
};
