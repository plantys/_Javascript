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

