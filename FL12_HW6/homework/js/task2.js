let a = +prompt('Enter length value of A-side triangle...',''),
    b = +prompt('Enter length value of B-side triangle...',''),
    c = +prompt('Enter length value of C-side triangle...','');
console.log(Number.isInteger(a),Number.isInteger(b),Number.isInteger(c));

if (!a || !b || !c) {
    alert('Input values should be ONLY numbers');
} else if ((Number.isInteger(a) || Number.isInteger(b) || Number.isInteger(c)) !== false) {
    if (a > 0 && b > 0 && c > 0) {

        if (a + b > c && a + c > b && b + c > a) {
            
            if (a === b === c) {
                console.log('Equilateral triangle');
            } else if (a === b || a === c || b === c) {
                console.log('Isosceles triangle');
            } else {
                console.log('Scalene triangle');
            }

        } else {
            console.log('Triangle doesn\'t exist');
        }

    } else {
        alert('A triangle must have 3 sides with a positive definite length');
    }

} else {
    alert('A triangle must have 3 sides with a positive definite length');
}
