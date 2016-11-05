// JavaScript File
//alert('hello');
//console.log('hello');
//document.write('Hello');

/*var sum = 1991 + 4 + 26;
var text = 'My magic number:' ;
var result = text - sum;
document.write(result);
*/
// var year = Number(prompt('Input year'));
// var month = Number(prompt('Input month'));
// var day = Number(prompt('Input day'));
// var sum = year + month + day;
// var text = 'Your magic number: ';
// var result = text + sum;
// document.write(result);

// var year = Number(prompt('Input year'));
// var month = Number(prompt('Input month'));
// var day = Number(prompt('Input day'));
// var sum = sumArgs(year, month, day);
// var text = 'Your magic number: ';
// var result = text + sum;
// document.write(result);

// function sumArgs(a, b, c) {
//     var result = a + b + c;
//     return result;
// }

// function tellAge(age) {
//     if (age < 18) {
//         return 'You are kid';
//     }
//     else {
//         return 'You are adult'
//     }
// }
// var age = Number(prompt('Tell your age'));
// var result = tellAge(age);
// document.write(result);

// result = Math.sqrt(25);
// document.write(result);




// var a = Number(prompt('Input "a" for: ax2+bx+c=0'));
// var b = Number(prompt('Input "b" fhor: ax2+bx+c=0'));
// var c = Number(prompt('Input "c" for: ax2+bx+c=0'));
var a = 1;
var b = 1;
var c = 1;
var text = 'x1,x2= ';
var x_1, x_2, des;
var text2 = "Error";

function diskriminant(a, b, c, des) {
    des = b * b - 4 * a * c;
    if (des >= 0) {
        x_1 = (0 - b + Math.sqrt(des)) / (2 * a);
        x_2 = (0 - b - Math.sqrt(des)) / (2 * a);
        return result;
    }
    else(des < 0);
    return result1;

}

var result = text + x_1 + x_2;
var result1 = text2;
document.write(result);
