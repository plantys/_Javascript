/*ES-6*/
// Arrow Function
const add = (a, b) => a + b;

// Spread Operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];

// Rest Parameter - an indefinite number of arguments as an array
const sum = (...args) => args.reduce((a, b) => a + b, 0);
//console.log(sum(4, 5)); // Expected output: 9
//console.log(sum(2, 6, 8, 10)); // Expected output: 26

// Object Destructuring
const { name, age } = { name: "John", age: 30 };

// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

const greeting = `Hello, my name is ${name} and I am ${age} years old`; //$ Template Literals - backticks ${}

// Classes- extends class (ref to parent as super)
class Person { constructor(name, age) { this.name = name; this.age = age; } 
  greet() { console.log(`Hello, my name is ${this.name}`); } 
}
class Student extends Person { constructor(name, age, grade) { super(name, age); this.grade = grade; } 
  study() { console.log(`${this.name} is studying`); } 
}
const person = new Person("John", 25); //ctor: name property of the person object being created is set equal to the name "John" being passed
const student = new Student("Jane", 20, "A");
console.log(student.grade); // Output: "A"
student.study(); // Output: "Jane is studying"


class Person { name; age; greet() { console.log(`Hello, my name is ${this.name}`); } }
class Student extends Person { grade; study() { console.log(`${this.name} is studying.`); } }

const person = new Person();
person.name = 'John';
person.age = 30;
person.greet(); // Output: Hello, my name is John

const student = new Student();
student.name = 'Jane';
student.age = 20;
student.grade = 'A';
student.greet(); // Output: Hello, my name is Jane
student.study(); // Output: Jane is studying.



// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // do something
    if (1==1) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};





// Async/Await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// Map
const arr1 = [1, 2, 3];
const arr2 = arr1.map((num) => num * 2);

// Filter
const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3.filter((num) => num % 2 === 0);

// Reduce
const arr5 = [1, 2, 3, 4, 5];
const sum1 = arr5.reduce((acc, num) => acc + num, 0);

// Find
const arr6 = [1, 2, 3, 4, 5];
const found = arr6.find((num) => num === 3);

// Every
const arr7 = [1, 2, 3, 4, 5];
const isGreaterThanZero = arr7.every((num) => num > 0);

// Some
const arr8 = [1, 2, 3, 4, 5];
const hasOddNumber = arr8.some((num) => num % 2 !== 0);

// Sort
const arr9 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr9.sort((a, b) => a - b);

// Reverse
const arr10 = [1, 2, 3, 4, 5];
arr10.reverse();

// Join
const arr11 = ["Hello", "World"];
const joined = arr11.join(" ");

// ==================================
// Advanced Concepts
// ==================================

// Closures
const counter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

const increment = counter();
increment(); // Output: 1
// IIFE
(function () {
    console.log("Hello, world!");
    })();
    
    // Callbacks
    const fetchData1 = (callback) => {
    // do something
    callback(data);
    };
    
    // Higher-Order Functions
    const multiplyBy = (num) => (value) => value * num;
    const double = multiplyBy(2);
    const triple = multiplyBy(3);
    
    // Currying
    const add1 = (a) => (b) => a + b;
    const add2 = add1(2);
    console.log(add2(3)); // Output: 5
    
    // Recursion
    const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
    };
    
    console.log(fibonacci(5)); // Output: 5
    
    // Memoization
    const memoize = (fn) => {
    const cache = {};
    return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
    return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
    };
    };
    
    const memoFib = memoize(fibonacci);
    console.log(memoFib(5)); // Output: 5
    
    // Promises with async/await
    const fetchData2 = async () => {
    try {
    const data = await fetchData1();
    console.log(data);
    } catch (error) {
    console.error(error);
    }
    };
    
    // Fetch API
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
    
    // Async Iteration
    const asyncFunction = async () => {
    for await (const item of asyncIterable) {
    console.log(item);
    }
    };
    
    // Generators
    function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
    yield i;
    }
    }
    
    const generator = generateSequence(1, 3);
    console.log(generator.next().value); // Output: 1
    console.log(generator.next().value); // Output: 2
    console.log(generator.next().value); // Output: 3
    
    // ==================================
    // Programming Logic
    // ==================================
    
    // String Reversal
    const reverseString = (str) => str.split("").reverse().join("");
    
    console.log(reverseString("hello")); // Output: "olleh"
    
    // Palindrome
    const isPalindrome = (str) => str === reverseString(str);
    
    console.log(isPalindrome("racecar")); // Output: true
    
    // FizzBuzz
    const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
    console.log("Fizz");
    } else if (i % 5 === 0) {
    console.log("Buzz");
    } else {
    console.log(i);
    }
    }
    };
    
    fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
    
    // Anagrams
    const isAnagram = (str1, str2) => {
    const normalize = (str) =>
    str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("")
    .sort()  .join("");

    return normalize(str1) === normalize(str2);
};

console.log(isAnagram("rail safety", "fairy tales")); // Output: true

// Capitalization
const capitalize = (str) => {
const words = [];
for (let word of str.split(" ")) {
words.push(word[0].toUpperCase() + word.slice(1));
}
return words.join(" ");
};

console.log(capitalize("a short sentence")); // Output: "A Short Sentence"

// Chunk
const chunk = (arr, size) => {
const chunked = [];
for (let i = 0; i < arr.length; i += size) {
const chunk = arr.slice(i, i + size);
chunked.push(chunk);
}
return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]

// Pyramid
const pyramid = (height) => {
const midpoint = Math.floor((2 * height - 1) / 2);
for (let row = 0; row < height; row++) {
let level = "";
for (let col = 0; col < 2 * height - 1; col++) {
if (midpoint - row <= col && midpoint + row >= col) {
level += "#";
} else {
level += " ";
}
}
console.log(level);
}
};

pyramid(4);
/*
Output:

#######
*/

// ================================
// Sample Input and Output
// ================================

// Map
const arr12 = [1, 2, 3];
const arr13 = arr12.map((num) => num * 2);

console.log(arr13); // Output: [2, 4, 6]

// Filter
const arr14 = [1, 2, 3, 4, 5];
const arr15 = arr14.filter((num) => num % 2 === 0);

console.log(arr15); // Output: [2, 4]

// Reduce
const arr16 = [1, 2, 3, 4, 5];
const sum2 = arr16.reduce((acc, num) => acc + num, 0);

console.log(sum2); // Output: 15

// Find
const arr17 = [1, 2, 3, 4, 5];
const found1 = arr17.find((num) => num === 3);

console.log(found1); // Output: 3

// Every
const arr18 = [1, 2, 3, 4, 5];
const isGreaterThanZero1 = arr18.every((num) => num > 0);

console.log(isGreaterThanZero1); // Output: true

// Some
const arr19 = [1, 2, 3, 4, 5];
const hasOddNumber1 = arr19.some((num) => num % 2 !== 0);

console.log(hasOddNumber1); // Output: true

// Sort
const arr20 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr20.sort((a, b) => a - b);

console.log(arr20); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Reverse
const arr21 = [1, 2, 3, 4, 5];
arr21.reverse();

console.log(arr21); // Output: [5, 4, 3, 2, 1]

// Join
const arr22 = ["Hello", "World"];
const joined1 = arr22.join(" ");

console.log(joined1); // Output: "Hello World"

// Closures
const counter1 = () => {
let count = 0;
return () => {
count++;
console.log(count);
};
};

const increment1 = counter1();
increment1(); // Output: 1
increment1(); // Output: 2

// Currying
const add3 = (a) => (b) => a + b;
const add4 = add3(2);

console.log(add4(3)); // Output: 5

// Recursion
const fibonacci1 = (n) => {
if (n <= 1) return n;
return fibonacci1(n - 1) + fibonacci1(n - 2);
};

console.log(fibonacci1(5)); // Output: 5

// Memoization
const memoize1 = (fn) => {
const cache = {};
return (...args) => {
const key = JSON.stringify(args);
if (cache[key]) {
return cache[key];
}
const result = fn(...args);
cache[key] = result;
return result;
};
};

const memoFib1 = memoize1(fibonacci1);
console.log(memoFib1(5)); // Output: 5

// Fetch API
const url1 = "https://jsonplaceholder.typicode.com/users";
fetch(url1)
.then((response) => response.json())
.then((data) => console.log(data));

// ==================================
// Conclusion
// ==================================
//This JavaScript cheat sheet covers a wide range of advanced concepts and programming logic. It includes examples of ES6+ features such as arrow functions, spread operator, rest parameter, object destructuring, array destructuring, template literals, classes, inheritance, promises, async/await, and more. It also covers programming logic such as string reversal, palindrome, FizzBuzz, anagrams, capitalization, chunking, and pyramids. Additionally, it includes sample input and output for some of the code examples. This cheat sheet can be used as a reference when coding in JavaScript and can help developers write better, more efficient code.