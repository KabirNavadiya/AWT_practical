
let numbersArray = [1, 2, 3, 4, 5];


console.log("Length of the array:", numbersArray.length);


console.log("Element at index 2:", numbersArray[2]);
console.log("Element at index 4:", numbersArray[4]);
console.log("Array : ",numbersArray);

numbersArray.push(6);
console.log("After push(6) : ",numbersArray);
numbersArray.pop(); 
console.log("After pop() : ",numbersArray);
numbersArray.unshift(0); 
console.log("After unshift(0) : ",numbersArray);
numbersArray.shift(); 
console.log("After shift : ",numbersArray);
console.log(" After join : ",numbersArray.join('-'));

delete numbersArray[2];
console.log("After delete : ",delete numbersArray[2]);

let newArray = [7, 8, 9];
numbersArray = numbersArray.concat(newArray); 
console.log("Concate : ",numbersArray);

let flattenedArray = [[10, 11], [12, 13]].flat();
console.log('Flatten Array:',flattenedArray );

numbersArray.splice(2, 1, 10, 11);
console.log("splice : ",numbersArray);

let slicedArray = numbersArray.slice(1, 4); 


// console.log("Modified array:", numbersArray);
 console.log("Sliced array:", slicedArray);



let person = {
    name: "kabir navadiya",
    age: 20,
    gender: "Male"
  };
  

  function displayPersonDetails(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Gender:", person.gender);
  }
  displayPersonDetails(person);
  