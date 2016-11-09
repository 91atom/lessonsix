var a = Number(prompt('Input "a" for: ax2+bx+c=0'));
var b = Number(prompt('Input "b" fhor: ax2+bx+c=0'));
var c = Number(prompt('Input "c" for: ax2+bx+c=0'));

 function kvadr(a,b,c) {
    var des=b * b - 4 * a * c;
   
    if (des>0) {
         
        var  x1 = (0 - b + Math.sqrt(des)) / (2 * a);
        var  x2 = (0 - b - Math.sqrt(des)) / (2 * a);
         return '2 rozvazku x1=  '+x1+'; x2='+''+x2;
    }
    else if (des==0) {
      var x3=(-b)/(2*a);
    return 'x2=x1' +x3;
    }
    else {
       return "no answer";
    }
}
var resurt=kvadr(a,b,c);
document.write(resurt);

