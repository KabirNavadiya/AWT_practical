function Factorial(number) {
    //(accessible within the entire function)
    let globalVariable = "global variable";
  
    function factorialRecursive(num) {
      // (accessible only within this nested function)
      let localVariable = "local variable";
      // console.log(localVariable);
      if (num === 0) {
        return 1;
      } else {
        return num * factorialRecursive(num - 1);
      }
    
    }
  
    
    const result = factorialRecursive(number);
  
    // Accessing variables from different scopes
    console.log(globalVariable);
    // console.log(localVariable); // Uncommenting this line would result in an error since localVariable is not accessible here.
  
    return result;
  }
  
  const num = 5;
  const Result = Factorial(num);
  console.log(`Factorial of ${num} is: ${Result}`);
  