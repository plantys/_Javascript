//tbd-----------------------------------------------------
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//map-----------------------------------------------------
const csvData = [
  'John,Doe,30',
  'Jane,Smith,28',
  'Alice,Johnson,25',
];
const peopleData = csvData.map((line) => {
  const [firstName, lastName, age] = line.split(',');
  return { firstName, lastName, age: Number(age) };
});
console.log(peopleData);// Output: [//   { firstName: 'John', lastName: 'Doe', age: 30 },
//map-----------------------------------------------------
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenSquares = numbers2.map((num) => (num % 2 === 0 ? num * num : null)).filter((num) => num !== null);
console.log(evenSquares); // Output: [ 4, 16, 36, 64 ]
//map-----------------------------------------------------
const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Alice', lastName: 'Johnson' },
];
const fullNames = people.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
console.log(fullNames); // Output: [ 'John Doe', 'Jane Smith', 'Alice Johnson' ]

// Destructuring simple------------------------------------------
const myObj = {name: 'Max', age: 28 }
const printName = ({name}) => {console.log(name); }
  printName(myObj);
// Destructuring with nested objects and default values------------------------------------------------------------
const person1 = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
  hobbies: ['reading', 'movies'],
};
const {
  name,
  age,
  address: { street, city, country },
  job = 'Developer',
  hobbies: [firstHobby, secondHobby],
} = person1;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(street); // Output: '123 Main St'
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'
console.log(job); // Output: 'Developer' (default value)
console.log(firstHobby); // Output: 'reading'
console.log(secondHobby); // Output: 'movies'
//-----------------------------------------------------------------------
 
const transformToObjects = numberArray => numberArray.map(a => ({val: a}));
const Array1 = [1, 2, 3];
const objectArray = transformToObjects(Array1);

console.log(objectArray); // Output: [{ val: 1 }, { val: 2 }, { val: 3 }]
console.log('---------------')
const numbers = [1,2,3]
const doublenum = numbers.map(a=>a*2)
console.log (doublenum);
console.log('---------------')
const filter = (...args) =>{
  return args.filter(el =>el ===1);
}
console.log(filter(1,2,3));
console.log('---------------')
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];

console.log(combinedArr); // output: [1, 2, 3, 4, 5, 6]

console.log('---------------')
class Human {
  constructor(){
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor(){
    super();
    this.name = 'Pradeep1';
  }
  printMyName(){
    console.log(this.name)
  }
}
const person = new Person();
person.printMyName();
person.printGender();


function printMyName(name){
  console.log(name);
}
printMyName('pradeep');
const multiply = number =>number*2;
console.log(multiply(2));

