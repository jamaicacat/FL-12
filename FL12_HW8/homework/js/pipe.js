function pipe(number, ...functions) {
    return functions.reduce((acc, functions) => functions(acc), number);
    }

function addOne(x) {
    return x + 1;
}
console.log(pipe(1,addOne,addOne,addOne));