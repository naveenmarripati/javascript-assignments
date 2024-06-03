// Objects
let person = {
    firstName: "Naveen",
    lastName: "Marripati",
    age: 29,
  };
  
console.log(person);
//Accessing Object Properties
//Dot Notation
console.log(person.firstName);
//Bracket Notation
console.log(person["firstName"]);
//Accessing Non-existent Properties
console.log(person.gender);  // undefined
console.log(person[gender]);  // undefined
//Variable as a Key
let a = "firstName";
console.log(person[a]);

//Object Destructuring
let { gender, age } = person;
console.log(gender);  // undefined
console.log(age);  //29


//Modifying Objects
//Dot Notation
person.firstName = "Abhi";

console.log(person.firstName);   // Abhi

//Bracket Notation:
person["firstName"] = "Abhi";

console.log(person["firstName"]);  // Abhi

//Adding Object Property
//Dot Notation:
person.gender = "Male";

console.log(person);

//Bracket Notation:
person["gender"] = "Male";

console.log(person);

