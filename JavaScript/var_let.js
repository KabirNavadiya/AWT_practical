var x = 1; // replace var with let and see the difference

if (x === 1) {
  var x = 2;
  console.log(x);
}

console.log(x);


// //part 2
function foo() {
    var x = 1;
    function bar() {
      var y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, `y` is scoped to `bar`
  }
  
  foo();
