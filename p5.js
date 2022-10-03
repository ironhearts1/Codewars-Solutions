//Build a pile of cubes
function findNb(m) {
    let sum = 0;
    let boxNum = 1;
    while (sum < m) {
        sum = sum + Math.pow(boxNum, 3);
        boxNum++;
    }
    if (sum == m) {
        return boxNum - 1;
    } else {
        return -1;
    }
}

//bouncing balls
function bouncingBall(h, bounce, window) {
    let count = 0;
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    while (h > window) {
        console.log(`1: ${h} and ${count}`);
        count++;
        h = h * bounce;
        if (h > window) {
            count++;
        }
    }
    console.log(`2: ${h} and ${count}`);
    return count;
}

//Break camelCase
function solution(string) {
    let finalArr = [];
    let pushingArr = [];
    let stringArr = string.split("");
    for (let i = 0; i < stringArr.length; i++) {
        if ((stringArr[i] === stringArr[i].toUpperCase()) == false) {
            pushingArr.push(stringArr[i]);
        } else {
            finalArr.push(pushingArr.join(""));
            pushingArr = [];
            pushingArr.push(stringArr[i]);
        }
        if (i === stringArr.length - 1) {
            finalArr.push(pushingArr.join(""));
        }
    }
    return finalArr.join(" ");
}

//Maximum subarray sum
var maxSequence = function (arr) {
    let currentBest = 0;
    let currentBestArr;
    for (let i = 0; i < arr.length; i++) {
        let currentArr = [];
        for (let j = i; j < arr.length; j++) {
            currentArr.push(arr[j]);
            let sum = 0;
            for (let z = 0; z < currentArr.length; z++) {
                sum = sum + currentArr[z];
            }
            if (sum > currentBest) {
                currentBest = sum;
                currentBestArr = currentArr;
            }
        }
    }
    return currentBest;
};

//Testing 1-2-3
var number = function (array) {
    let finalArr = [];
    for (let i = 0; i < array.length; i++) {
        let lineNum = i + 1;
        let string = `${lineNum}: ${array[i]}`;
        finalArr.push(string);
    }
    return finalArr;
};
