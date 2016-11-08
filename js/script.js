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






// var a = 1;
// var b = 1;
// var c = 1;
// var text = 'x1,x2= ';

// var text2 = "Error";

// function result() {
//     des = b * b - 4 * a * c;
   
//     if (des >= 0) {
//         var x_1, x_2, des;
//         x_1 = (0 - b + Math.sqrt(des)) / (2 * a);
//         x_2 = (0 - b - Math.sqrt(des)) / (2 * a);
//         return result;
//     }
//     else(des < 0);
//     return result1;
// }
//  document.write('x1=');
//  var x_1;
//  alert( x_1 );
 
//  document.write('x2=');
//  var x_2;
//  alert( x_2 );
 
 
// var result = text + x_1 + x_2;
// var result1 = text2;
// document.write(result);

// function count() {
//   var i, j; // передвинули объявления var в начало
//   for (i = 0; i < 3; i++) {
//     j = i * 2;
//   }

//   document.write('x1='); // i=3
//   alert( j ); // j=4
// }
// count();
var a = Number(prompt('Input "a" for: ax2+bx+c=0'));
var b = Number(prompt('Input "b" fhor: ax2+bx+c=0'));
var c = Number(prompt('Input "c" for: ax2+bx+c=0'));
var x1= 1;
function Des(a, b, c, x1) {
   x1 = a+b;
   return b*b - 4*a*c;
   
   
   
   
}

var test = Des(a, b, c);
document.write('Deskriminant = ', test);
alert(test); 
// var x_1, x_2;
// x_1 = (0 - b + Math.sqrt(Des)) / (2 * a);
// x_2 = (0 - b - Math.sqrt(Des)) / (2 * a);
// document.write('x1 = ', x_1);