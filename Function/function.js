var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 110;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}
console.log("The scope chain code");
console.log("case 1");
function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
  }
  var b = 10;
  a();
