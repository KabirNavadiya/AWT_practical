// Using let

let x = 10;
x = 20; // Valid
console.log("X : ",x);

// Using const

const y = 5;
//y = 7; // Invalid, will throw an error
console.log("Y : ",y);


// Regular function
function add(num1, num2) {
    return num1 + num2;
  }
  console.log("Regular function : ",add(1,2));
  
  // Arrow function
  hello = () => {
    return "Hello World!";
  }

 // Using spread operator with arrays
const arr1 = [1, "kabir",3.14];
console.log("without spread ... of : ",arr1);
const arr2 = [...arr1, true, 5];
console.log("With spread ... of : ",arr2);

// using for/of 
const arr = [1, "kabir", 3.14];
console.log("Array : ",arr);
console.log("for/of ");
for (const element of arr) {
  console.log(element);
}


//Map Objects
console.log("map objects ");
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

//set objects
console.log("\n Set objects ");
const mySet = new Set();

mySet.add(1); 
mySet.add(5); 
mySet.add(5.5); 
mySet.add("kabir"); 


console.log(mySet1);

//classes 
console.log("\nclasses ");
class kabir {
    constructor(name) {
      this.name = name;
    }
  
    greeting() {
      console.log(`Hello, i am ${this.name}`);
    }
  }
  
  const person = new kabir('kabir');
  person.greeting();
  

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
  greet('kabir'); // Output: Hello, kabir
  

  //function rest parameters 
  console.log("\nfunction rest parameters ");
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  