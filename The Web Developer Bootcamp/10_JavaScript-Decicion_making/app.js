// // variable 'num' to store a number 
// let num = Math.random();

// // if 'num' is even, console out 'Even' else 'Odd'
// if (num % 2 === 0) {
//     console.log('Even');
// }
// else {
//     console.log('Odd');
// }

// // ----- Nesting conditionals

// // variable 'password' to take password from the user
// const password = prompt('Enter password: ');

// // if password's length is more than or equal to 6
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Your password is ok ;)');
//     }
//     else {
//         console.log('Password must not contain spaces :(')
//     }
// }
// else if (password.length < 6) {
//     console.log("Your password is too short :|");
// }

// // ----- Logical operators
// console.log(Boolean(1 && 0));
// console.log(Boolean(1 && 1));
// console.log(Boolean(0 && 0));
// console.log(Boolean(0 || 0));
// console.log(Boolean(1 || 0));
// console.log(Boolean(!0));   // not 0 = not false = true

// ----- Switch statement

// variable 'dayNum' to store the day's number

const dayNum = 1;

switch (dayNum) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid number!');
}