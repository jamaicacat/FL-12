function countNumbers () {
    let numberString = '';
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 0; j <= 9; j++) {
            if (+arguments[0][i] === j) {
                numberString += j;
            }
        }
    }
    let numbers = {};
    for (let i = 0; i <= 9; i ++) {
        for (let j = 0; j < numberString.length; j++) {
            if (+numberString[j] === i) {
                let key = `'${i}'`;
                numbers[key] = null;
            }
        }
    }
    for (let i = 0; i <= 9; i ++) {
        for (let j = 0; j < numberString.length; j++) {
            if (+numberString[j] === i) {
                let key = `'${i}'`;
                numbers[key] += 1;
            }
        }
    }
    return numbers;
}
console.log(countNumbers('A1aB22bC333cD4444dE555eF66fG7777gH8878hK99999kL0l'));