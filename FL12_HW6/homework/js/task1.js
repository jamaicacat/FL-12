let a = +prompt('Enter A value...',''),
    b = +prompt('Enter B value...',''),
    c = +prompt('Enter C value...',''),
    d;
const powerFactor = 2,
      discriminantCoefficient = 4,
      divisionRatio = 2;
if (isNaN(a) || isNaN(b) || isNaN(c) || (a && b) === 0) {
    console.log('Invalid data input!');
} else {
     d = Math.pow(b, powerFactor) - discriminantCoefficient * a * c;
}

if (d < 0) {
    console.log('No solution: D < 0');
} else if (d === 0) {
    let x = Math.round(-b / (2 * a));
    console.log('x = ', x);
} else if (d > 0) {
    let x1 = Math.round((-b + Math.sqrt(d)) / (divisionRatio * a));
    let x2 = Math.round((-b - Math.sqrt(d)) / (divisionRatio * a));
    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
}