//Convert string to camel case
function toCamelCase(str) {
    let newstr = [];
    if (str.includes("-")) {
        newstr = str.split("-");
    } else if (str.includes("_")) {
        newstr = str.split("_");
    }
    for (let i = 0; i < newstr.length; i++) {
        if (i == 0) {
            //       let temp = newstr[i][0].toLowerCase() + newstr[i].slice(1);
            //       newstr[i] = temp;
        } else {
            let temp = newstr[i][0].toUpperCase() + newstr[i].slice(1);
            newstr[i] = temp;
        }
    }
    let final = newstr.join("");
    return final;
}

//Detect Pangram
function isPangram(string) {
    for (let i = 0; i < 26; i++) {
        let temp = String.fromCharCode(65 + i);
        let temp2 = String.fromCharCode(97 + i);
        if (string.includes(temp) == true || string.includes(temp2) == true) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

//Categorize New Member
function openOrSenior(data) {
    let output = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] > 54 && data[i][1] > 7) {
            output.push("Senior");
        } else {
            output.push("Open");
        }
    }
    return output;
}

//Is this a triangle?
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && c + b > a) {
        return true;
    } else {
        return false;
    }
}

//Remove First and Last Character
function removeChar(str) {
    //You got this!
    let final = str.slice(1, str.length - 1);
    return final;
}
