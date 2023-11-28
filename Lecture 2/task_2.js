// lecture 2 - task 2

// area of circle
let pi = 3.1416
let r = Number(prompt('Enter R value: '))

let areaOfCircle = pi * (r**2)
document.write('Area of circle: ' + areaOfCircle)

// area of square

let a = Number(prompt('Enter value of A: '))

let areaOfSquare = a**2
document.write('area of square: ' + areaOfSquare)


// area of rectangle
let length = Number(prompt('Enter the length: '))
let width = Number(prompt('Enter the width: '))

let areaOfRectangle = width * length
document.write('Area of rectangle: ' + areaOfRectangle)

// area of triangle
let base = Number(prompt('Enter the base: '))
let height = Number(prompt('Enter the height: '))

let areaOfTriangle = 0.5 * base * height
document.write('Area of triangle: ' + areaOfTriangle)