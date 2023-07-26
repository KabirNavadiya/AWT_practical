// Using let

let x = 10;
x = 20; // Valid
console.log("X : ",x);

// Using const

const y = 5;
//y = 7; // Invalid, will throw an error
console.log("Y : ",y);


// Regular function
function add(a, b) {
    return a + b;
  }
  console.log("Regular function : ",add(1,2));
  
  // Arrow function
  const Add = (a, b) => a + b
 console.log("Arrow function :",Add(3,4));


 // Using spread operator with arrays
const arr1 = [1, 2, 3];
console.log("without spread ... of : ",arr1);
const arr2 = [...arr1, 4, 5];
console.log("With spread ... of : ",arr2);

// using for/of 
const arr = [1, 2, 3];
console.log("Array : ",arr);
console.log("for/of ");
for (const element of arr) {
  console.log(element);
}


//Map Objects
console.log("map objects ");
const map = new Map();
map.set('a', 1);
map.set('b', 2);

for (const [key, value] of map) {
  console.log(key, value);
}

//set objects
console.log("\n Set objects ");
console.log("Original set : {1,2,2,3,3,4}");
const set = new Set([1, 2, 2, 3, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }

//classes 
console.log("\nclasses ");
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person = new Person('kabir');
  person.sayHello();
  

  //promises 
  console.log("\npromises");
  function fetchData() {
    return new Promise((resolve, reject) => {
        const data = "resolved data";
        resolve(data);
    });
  }
  
  // Using promises
  fetchData()
    .then((result)=>console.log(result))
    .catch((error)=> console.error(error));
  
//symbol 
console.log("\nSymbol ");
const sym = Symbol('description');
console.log(sym); // Output: Symbol(description)


//default parameter 
console.log("\ndefault parameters ");
function greet(name = 'Anonymous') {
    console.log(`Hello, ${name}`);
  }
  
  greet(); // Output: Hello, Anonymous
  greet('kabir'); // Output: Hello, John
  

  //function rest parameters 
  console.log("\nfunction rest parameters ");
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  