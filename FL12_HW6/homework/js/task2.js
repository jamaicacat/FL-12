let a = +prompt('Enter length value of A-side triangle...',''),
    b = +prompt('Enter length value of B-side triangle...',''),
    c = +prompt('Enter length value of C-side triangle...','');

if (!a || !b || !c) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn\'t exist');
} else if (a === b === c) {
    console.log('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}