// task 1
function convert(...args) {
    for (let i = 0; i < args.length; i++) {
        args[i] = typeof args[i] === 'string' ? parseInt(args[i], 10) : args[i] + '';
    }
    return args;
}
const a1 = '1', b1 = 2, c1 = '3', d1 = 4;
console.log(convert(a1, b1, c1, d1));

// task 2
function executeForEach(arr, callback) {
    for (let element of arr) {
        callback(element);
    }
}
const arrTask2 = [1, 2, 3];
executeForEach(arrTask2, function(el) {
    console.log(el * 2);
});

// task 3
function mapArray(arr, callback) {
    let resultArray = [];
    executeForEach(arr, element => resultArray.push(callback(element)));
    return resultArray;
}
console.log(mapArray([2, '5', 8], function(el) {
    return +el + 3;
})); 

// task 4
function filterArray(arr, callback) {
    let resultArray = [];
    executeForEach(arr, function(element) {
        if (callback(element)) {
            resultArray.push(element);
        }
    });
    return resultArray;
}
const arrTask4 = [2, 5, 8];
console.log(filterArray(arrTask4, function(el) {
    return el % 2 === 0;
}));

// task 5
function flipOver(str) {
    let resultStr = '';
    for (let i = 1; i <= str.length; i++) {
        resultStr += str[str.length - i];
    }
    return resultStr;
}
console.log(flipOver('hey world'));

// task 6
function makeListFromRange(arr) {
    let resultRange = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        resultRange.push(i);
    }
    return resultRange;
}
console.log(makeListFromRange([2, 7]));

// task 7
function getArrayOfKeys(arr, key) {
    let resultArray = [];
    executeForEach(arr, function(element) {
        return resultArray.push(element[key]);
    });
    return resultArray;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
console.log(getArrayOfKeys(actors, 'name'));

// task 8
function substitute(arr) {
    let resultArray = mapArray(arr, element => element < 30 ? '*' : element);
    return resultArray;
}
const arrTask8 = [58, 14, 48, 2, 31, 29];
console.log(substitute(arrTask8));

// task 9
function getPastDay(date, daysPast) {
    let dateCopy = new Date(date);
    return dateCopy.getDate(dateCopy.setDate(date.getDate() - daysPast));
}
const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

// task 10
function formatDate(date) {
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));