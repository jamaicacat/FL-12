function makeNumber () {
    let numberString = '';
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 0; j <= 9; j++) {
            if (+arguments[0][i] === j) {
                numberString += j;
            }
        }
    }
    return numberString;
}
console.log(makeNumber('A1aB2bC3cD4dE5eF6fG7gH8hK9kL0l'));