// Two Sum
function twoSum(numbers, target) {
    let index1;
    let index2;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                index1 = i;
                index2 = j;
            }
        }
    }
    let final = [index1, index2];
    return final;
}

// Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    let total = principal;
    while (total < desired) {
        let yearlyAccrued = total * interest * (1 - tax);
        total = total + yearlyAccrued;
        years++;
    }
    return years;
}

//Extract the domain name from a URL
function domainName(str) {
    let url = str.split("");
    let domain = [];
    if (url[0] == "h") {
        if (url[4] == "s") {
            url.splice(0, 8);
        } else {
            url.splice(0, 7);
        }
    }
    if (url[0] == "w" && url[1] == "w") {
        url.splice(0, 4);
    }
    for (let i = 0; i < url.length; i++) {
        if (url[i] == ".") {
            break;
        }
        domain.push(url[i]);
    }
    return domain.join("");
}

//WeIrD StRiNg CaSe
function toWeirdCase(string) {
    let arr = string.split(" ");
    let finalArr = [];
    for (let j = 0; j < arr.length; j++) {
        let splitArr = arr[j].split("");
        console.log(splitArr);
        for (let i = 0; i < splitArr.length; i++) {
            if (i % 2 == 0) {
                finalArr.push(splitArr[i].toUpperCase());
            } else if (i % 2 !== 0) {
                finalArr.push(splitArr[i].toLowerCase());
            }
        }
        if (j < arr.length - 1) {
            finalArr.push(" ");
        }
    }
    return finalArr.join("");
}

//Make a function that does arithmatic
function arithmetic(a, b, operator) {
    if (operator == "add") {
        return a + b;
    } else if (operator == "subtract") {
        return a - b;
    } else if (operator == "multiply") {
        return a * b;
    } else if (operator == "divide") {
        return a / b;
    }
}
