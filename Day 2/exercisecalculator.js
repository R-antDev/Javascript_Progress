

let a = Number(prompt('Enter first number: '))
let b = Number(prompt('Enter second number: '))

function mul(x, y) {
    return x * y
}

function division(x, y) {
    return x / y
}








if (a < b){
    document.write('A is not greater than B')
}else {
    //IIFE function
    (function add(x, y) {
        document.write('Addition:', x + y , '<br>')
    })(a, b);
    (function add(x, y) {
        document.write('subtraction:', x - y , '<br>')
    })(a, b)
    // Normal function
    document.write('Mul is:',mul(a, b), '<br>')
    document.write('Division is:',division(a, b), '<br>')
}

