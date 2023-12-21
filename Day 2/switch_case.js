
let digit = parseInt(prompt('Enter your number: '))

let t =  parseInt(digit / 10)

switch (t){
    case 10:
    case 9:
    case 8: document.write('<p style="color: blue" >Grade: A+ </p>');
    break
    case 7: document.write('<p style="color: green" >Grade: A </p>');
    break
    case 6: document.write('<p style="color: red" >Grade: B </p>');
    break
    default:
        document.write('Enter correct number.')
}