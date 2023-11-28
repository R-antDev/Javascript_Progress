// 6. Write a program in that takes minutes as input, and display the total number of hours and minutes.

let minutes = 160
let hours = Math.floor(minutes / 60)
let remainingMinutes = minutes % 60

console.log('Total', hours, 'hours and', remainingMinutes, 'minutes')