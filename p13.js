//Build Tower
function towerBuilder(nFloors) {
    let tower = [];
    let width = 1 + (nFloors - 1) * 2;
    let temp = [];
    for (let i = 0; i < nFloors; i++) {
        let counter = (width - (1 + i * 2)) / 2;
        let counter2 = 1 + i * 2;
        for (let j = 0; j < counter; j++) {
            temp.push(" ");
        }
        for (let h = 0; h < counter2; h++) {
            temp.push("*");
        }
        for (let j2 = 0; j2 < counter; j2++) {
            temp.push(" ");
        }
        tower.push(temp.join(""));
        temp = [];
    }
    return tower;
}

//Sort the odd
function sortArray(array) {
    let sortOdd = [];
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) % 2 == 1) {
            sortOdd.push(array[i]);
        }
    }
    sortOdd.sort(function (a, b) {
        return a - b;
    });
    console.log(sortOdd);
    let newary = array;
    let counter = 0;
    for (let j = 0; j < newary.length; j++) {
        if (Math.abs(newary[j]) % 2 == 1) {
            newary[j] = sortOdd[counter];
            counter++;
        }
    }
    return newary;
}

//The Hashtag Generator
function generateHashtag(str) {
    let checked = str.trim();
    let trimmed = str.trim().split("");
    let ary = [];
    let temp = "";
    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] != " ") {
            temp = temp + trimmed[i];
        }
        if (trimmed[i] === " ") {
            ary.push(temp);
            temp = "";
        }
        if (i == trimmed.length - 1 && trimmed[i] != " ") {
            //       temp = temp + trimmed[i];
            ary.push(temp);
        }
    }
    for (let j = 0; j < ary.length; j++) {
        ary[j].toLowerCase();
    }
    for (let h = 0; h < ary.length; h++) {
        ary[h] = ary[h].charAt(0).toUpperCase() + ary[h].substr(1);
    }
    if (checked == "") {
        return false;
    } else if (ary.join("").length > 139) {
        return false;
    } else {
        return "#" + ary.join("");
    }
}

//Equal Sides Of An Array
function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftTot = 0;
        let rightTot = 0;
        for (let j = i; j > 0; j--) {
            leftTot = leftTot + arr[j - 1];
        }
        for (let h = i; h < arr.length - 1; h++) {
            rightTot = rightTot + arr[h + 1];
        }
        if (leftTot == rightTot) {
            return i;
        } else {
            continue;
        }
    }
    return -1;
}

//Directions Reduction
function dirReduc(arr) {
    for (let count = 0; count < 1000; count++) {
        for (let i = 0; i < arr.length; i++) {
            if (
                (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") ||
                (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") ||
                (arr[i] == "EAST" && arr[i + 1] == "WEST") ||
                (arr[i] == "WEST" && arr[i + 1] == "EAST")
            ) {
                arr[i] = "-";
                arr[i + 1] = "-";
            }
        }
        arr = arr.filter((dir) => {
            if (dir == "-") {
                return false;
            } else {
                return true;
            }
        });
    }
    return arr;
}
