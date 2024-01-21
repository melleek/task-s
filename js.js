//task 1 
function matchHouse(num) {
    if (num === 0) {
        return 0
    } else {
        return 6 + (num - 1) * 5
    }
}
console.log(matchHouse(86));



//task 2 
function reverse(num) {
    let rev = 0;

    if (num === 1) {
        return "It's one digital"
    }

    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        rev = rev * 10 + i % 10
    }
    return rev
}
console.log(reverse(1));




//task 3
function equal(a, b, c) {

    if (a === b && b === c) {
        return 3
    } else if (a === b || b === c || a === c) {
        return 2
    } else {
        return 0
    }
}
console.log(equal(3, 4, 3));




//task 4
function findLargNum(num) {

    let max = 0;

    let numstr = num.toString()

    for (let i = 0; i < numstr.length; i++) {
        let dj = numstr[i]
        if (dj > max) {
            max = dj
        }
    }
    return " The largest digit in" + " " + num + " " + "is" + " " + max
}
console.log(findLargNum(123456789));





//task 6
function isPandigital(num) {
    let n = num.toString();

    let numStr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < numStr.length; i++) {
        if (!n.includes(numStr[i])) {
            return false;
        }
    }
    return true;
}
console.log(isPandigital(123456789));




//task 7
function fibonachi(num) {
    if (num <= 1) {
        return num
    } else {
        return fibonachi(num - 1) + fibonachi(num - 2)
    }
}
console.log(fibonachi(7));



//task 9
function natural(num) {

    if (num < 0) {
        return false
    }

    let naturalNum = Math.floor(num)

    return num === naturalNum
}
console.log(natural(15 / 10));



//task 10
function isLeapYear (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear(2024));