// 1. Question: Reverse a string without using the built-in reverse() method.


// const string = "Darshan"

// function reverse(string){
//   for(let i = string.length-1; i>=0;i--){
//     console.log(string[i])
//   }
// }
//  console.log(reverse(string))



// 2. Question: Count the number of vowels in a given string.

// Solve the equation using Regex 

// const input = prompt("Enter the value in string")
 
// const regex = /[aeiou]/gi

// const count = input.match(regex)

// console.log(count.length)

// Question3: Convert the first letter of each word in a sentence to uppercase.


// const input = prompt("Enter your name in string")
// console.log(input)

// const firstStep = input.charAt(0).toUpperCase()
// const secondStep = input.slice(1)

// const finalStep = (`This is Final Result ${firstStep}${secondStep}`)
// console.log(finalStep)

// 4. Question: Check if a string is a palindrome.


// const input = prompt("Enter your string")

// const leng = input.length
// const output = "It is Palindrome"

// for(var i =0; i<leng/2; i++){
//   if(input[i] != input[leng -1 -i]){
//     output = "It is not palindrome"
//   }
// }
// console.log(`${input} -- ${output}`)



// 5. Question: Find the sum of all positive numbers in an array.


// const num = [1,4,6,-3,-4,-5]

// const positive = (arr)=>{
//   return arr.filter(item=>item>0).reduce((a,b)=>a+ b)
// }
// console.log(positive(num))

// 6. Question: Find the index of the first occurrence of a specific element in an array.


// function findFirstOccurrence(arr, element) {
  
//   for (let i = 0; i < arr.length; i++) {
//      if (arr[i] === element) {
//           return i;
//       }
//   }
 
//   return -1;
// }

// let numbers = [1, 2, 3, 4, 2, 5];
// let elementToFind = 2;
// let index = findFirstOccurrence(numbers, elementToFind);
//  console.log(index); 



// 7. Question: Remove all duplicates from an array without built-in methods.

// let dup = [ 1,1,3,3,2,2]

// let uniqueArr=[]
// for (let value of dup){
//   if(!uniqueArr.includes(value)){
//     uniqueArr.push(value)
//   }
  
// }
// console.log(uniqueArr);



// 8. Question: Sort the array in ascending and descending without built-in methods.

//=========================>  scending <=============================================

// let arr = [12,88,64]
// let dk;
// for(let i=0; i< arr.length; i++) {
// for(let j=i; j< arr.length; j++) {
// if(arr[i] > arr[j]) {
// dk = arr[i];
// arr[i] = arr[j];
// arr[j] = dk;
// }}}
// console.log(arr)



// =========================>  Descending <=============================================

// let arr = [12,88,64]
// let dk;
// for(let i=0; i< arr.length; i++) {
// for(let j=i; j< arr.length - 1; j++) {
// if(arr[i] > arr[j]) {
// dk = arr[i];
// arr[i] = arr[j];
// arr[j] = dk;
// }}}
// console.log(arr)

//9. Question: Print all even numbers between 1 and 20 using a while loop.


let number = 1;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}

// 10. Question: Calculate the factorial of a number using a do-while loop.



// function factorial(n) {
//   let result = 1;
//   let i = n;

//   do {
//       result *= i;
//       i--;
//   } while (i > 0);

//   return result;
// }

// let number = 5;
// let fact = factorial(number);
// console.log(`Factorial of ${number} is ${fact}`);



// 11. Question: Iterate through the properties of an object using a for-in loop.

// function iterateObject() {
//   let Obj = {
//       name: "Darshan Kumar",
//       course: "Web development",
//       age: 21
//   };

//   Object.keys(Obj).forEach(key => {
//       const value = exampleObj[key];
//       console.log(`${key}: ${value}`);
//   });

// }
// iterateObject();


// 12. Question: Loop through an array using a for-of loop and double each element.


// let array = [1,2,3,4,5,6]
// for (element of array){
//   array[array.indexOf(element)]= element*2
// }
// console.log(array)

// 13. Question: Check if a number is even or odd and return a corresponding message.


// function oddEven(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }

// console.log(oddEven(21));
// console.log(oddEven(12));




// 14. Question: Find the maximum of three numbers using nested ternary operators.

// function three(a, b, c) {
//   return a >= b ? (a >= c ? a : c) : (b >= c ? b : c);
// }

// // Example usage:
// let num1 = 10, num2 = 5, num3 = 8;
// let max = three(num1, num2, num3);
// console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`);


// 15. Question: Determine if a year is a leap year or not.


// function leap(year) {
//   if (year % 4 === 0) {
//       if (year % 100 === 0) {
//           if (year % 400 === 0) {
//               return true; 
//           } else {
//               return false; 
//           }
//       } else {
//           return true; 
//       }
//   } else {
//       return false; 
//   }
// }
// let year = 2024;
// if (leap(year)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }



// =================================>   Section 2   ===========================================>
//   Q1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }


//   let score = 85;
// let result = score >= 80 ? "Pass" : "Fail";

// console.log(result); 



// Q2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?


// let user = {
//   id: 1,
//   name: "Darshan",
//   address: {
//       city: "karachi",
//       postalCode: "10001",
//       country: "Pakistan"
//   },
//   contact: {
//       email: "darshan.kumar@example.com",
//       phone: {
//           mobile: "+1234567890",
//           home: "+9876543210"
//       }
//   }
// };
// let cityName = user.address?.city; 
// let userEmail = user.contact?.email; 
// let userMobilePhone = user.contact?.phone?.mobile; 


// let userState = user.address?.state; 
// let userWorkPhone = user.contact?.phone?.work; 
// let firstElement = arr?.[0];


// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.


// const obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//   console.log(key); 
//   console.log(obj[key]); }

//   const arr = [1, 2, 3];

// for (let value of arr) {
//   console.log(value); 
// }


// Q4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.


// function averages(numbers) {
//   if (numbers.length === 0) {
//       return 0; 

//   let sum = 0;
//   for (let number of numbers) {
//       sum += number;
//   }

//   return sum / numbers.length;
// }


// const numbersArray = [5, 10, 15, 20];
// const average = averages(numbersArray);
// console.log("Average:", average); }



// Q5. Explain the concept of "closures" in JavaScript and provide an example of their practical use

// function counter1() {
//   let count = 0; 
 
//   function increment() {
//       count++;
//       console.log(count);
//   }

//   return increment; }


// const Counter2 = counter1();


// Counter2(); 
// Counter2(); 
// Counter2(); 

// Q6 Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

// let student = {
//   name: "Darshan Kumar",
//   age: 20,
//   grades: [85, 90, 75, 95, 80],

// average: function() {
//       let sum = 0;
//       for (let grade of this.grades) {
//           sum += grade;
//       }
//       return sum / this.grades.length;
//   }
// };


// console.log("Student Name:", student.name);
// console.log("Student Age:", student.age);
// console.log("Student Grades:", student.grades);
// console.log("Average Grade:", student.average());


// // Q7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy


// 1. Shallow Copy

// const obj = {
//   name: 'Darshan Kumar',
//   age: 30,
//   hobbies: ['reading', 'running']
// };
// const shallowCopy = Object.assign({}, obj);


// shallowCopy.age = 31;
// shallowCopy.hobbies.push('cooking');

// console.log(obj); 
// console.log(shallowCopy);    

// 2. deep copy

// Original object
// const obj = {
//   name: 'Darshan',
//   age: 21,
//   hobbies: ['reading', 'running']
// };


// const deepCopy = JSON.parse(JSON.stringify(obj));


// deepCopy.age = 20;
// deepCopy.hobbies.push('cooking');

// console.log(obj); 
// console.log(deepCopy);    


// 3. Reference Copy

// const obj = {
//   name: 'Darshan',
//   age: 20,
//   hobbies: ['reading', 'running']
// };
// const referenceCopy = obj;

// referenceCopy.age = 21;
// referenceCopy.hobbies.push('cooking');

// console.log(obj); 
// console.log(referenceCopy);  


// Q8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(number => {
//     const result = number % 2 === 0 ? 'even' : 'odd';
//     console.log(`${number} is ${result}`);
// });

// Q9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// let i = 0;
// while (i < 5) {
//     console.log(i); 
//     i++;
// }


// Q10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

// const users = [
//   { name: 'Darshan', address: { city: 'Karachi' } },
//   { name: 'Waqas' }, 
//   { name: 'Aun', address: { city: 'Lahore' } },
//   { name: 'Farhan', address: null }, 
//   { name: 'Ameet', address: { city: 'Punjab' } }
// ];

// for (const user of users) {
  
//   const city = user.address?.city;

  
//   if (city) {
//       console.log(`${user.name} lives in ${city}.`);
//   } else {
//       console.log(`${user.name} has no city information available.`);
//   }
// }


// Q11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.


// const person = {
//   name: 'DArshan Kumar',
//   age: 21,
//   occupation: 'Frontend Developer',
//   city: 'Karachi'
// };

// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//       console.log(`${key}: ${person[key]}`);
//   }
// }


// Q12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
 // ====================================>Break<===============================================================

// let fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];
// let searchFruit = "cherry";
// let found = false;

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === searchFruit) {
//         found = true;
//         console.log(`Found ${searchFruit} at index ${i}`);
//         break;     }
// }

// if (!found) {
//     console.log(`${searchFruit} is not in the list.`);
// }
// ====================================>Continue<===============================================================


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         continue; 
//     }
//     console.log(`Processing odd number: ${numbers[i]}`);
// }


// Q13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.


// function calculate(income) {
  
//   const taxRate = income > 50000 ? 0.2 : 0.1;
  
  
//   const taxAmount = income * taxRate;
  
//   return taxAmount;
// }

// const income = 60000;
// const tax = calculate(income);
// console.log(`The tax amount for an income of $${income} is $${tax}`);






// Q14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.


// let car = {
//   make: "Toyota",
//   model: "Camry",
//   startEngine: function() {
//       console.log(`The ${this.make} ${this.model}'s engine is now running.`);
//   }
// };


// car.startEngine();




// Q15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.



// Regular function

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 3));


// Arrow Function

// const multiply = (a, b) => a * b;

// console.log(multiply(2, 3)); 



// ==============================================>Section-03<===========================================================================



//                       **Map Transformation:**
// - Q1: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.

// let arr = [1, 6, 7, 9];
// let result = arr.map(x => x ** 2);
// console.log(result);



//                            . **Filter and Map Combination:**
// - Q2: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.



//                                    **Sorting Objects:**
// - Q3: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices

// const details = [
//   { name: 'Darshan', age: 20 },
//   { name: 'Maan', age: 10 },
//   { name: 'neelash', age:9 },
//   { name: ' HAresj', age: 50 }
// ];

// items.sort((a, b) => b.age - a.age);

// console.log(details);

//                      4. **Reduce for Aggregation:**
// - Q4: Use the `reduce` method to find the total sum of all even numbers in an array of integers.




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const totalSumOfEvens = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     return accumulator + currentValue;
//   }
//   return accumulator;
// }, 0);

// console.log(totalSumOfEvens);


//                               **Find and Modify:**
// - Q5: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

// const tasks = [
//   { id: 1, title: 'Task 1', status: 'pending' },
//   { id: 2, title: 'Task 2', status: 'pending' },
//   { id: 3, title: 'Task 3', status: 'pending' },
// ];

// const taskIdToUpdate = 2;

// const task = tasks.find(task => task.id === taskIdToUpdate);

// if (task) {
//   task.status = 'completed';
// }

// console.log(tasks);



//                                      **Chaining Methods:**
// - Q6: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

// const numbers = [-3, 5, 8, -1, 4, -7, 10, -2];

// const averageOfPositiveNumbers = numbers
//   .filter(num => num > 0)                
//   .reduce((acc, num, _, arr) => acc + num / arr.length, 0) 
//   .toFixed(2);                           
// console.log(averageOfPositiveNumbers); 



//                                       . **Conditional Filtering:**
// - Q7: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

// function filterAdults(people) {
//   return people.filter(person => person.age >= 18);
// }


// const people = [
//   { name: 'Kabir', age: 17 },
//   { name: 'sajan', age: 22 },
//   { name: 'Sameer', age: 15 },
//   { name: 'Rahul', age: 19 }
// ];

// const adults = filterAdults(people);

// console.log(adults);


//                                   **Advanced Sorting:**
// - Q8: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.



// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }

// const strings = ["apple", "banana", "kiwi", "cherry", "mango"];
// const sortedStrings = sortByLength(strings);

// console.log(sortedStrings);



//                                          **Nested Array Operations:**
// - Q9: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

// function flattenAndSum(arrays) {

//   const flattenedArray = arrays.flat();
  
  
//   const sum = flattenedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
//   return sum;
// }


// const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
// const totalSum = flattenAndSum(arrayOfArrays);

// console.log(totalSum); 



//                                     **Error Handling with Find:**
// - Q10: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.



// function findWithDefault(array, predicate, defaultValue) {
//   const result = array.find(predicate);
//   return result !== undefined ? result : defaultValue;
// }


// const users = [
//   { id: 1, name: 'Darshan' },
//   { id: 2, name: 'Darshan1' },
//   { id: 3, name: 'Darshan2' }
// ];

// const defaultUser = { id: 0, name: 'Default User' };

// const foundUser = findWithDefault(users, user => user.id === 2, defaultUser);
// console.log(foundUser); 

// const notFoundUser = findWithDefault(users, user => user.id === 4, defaultUser);
// console.log(notFoundUser); 



//                                                    **Map Method:**
// - Q11: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?


// const products = [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Tablet', price: 500 }
// ];

// const productNames = products.map(product => product.name);

// console.log(productNames);



//                                                 **Filter Method:**
// - Q12: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.


// const numbers = [3, 8, 1, 6, 4, 9, 2, 7];

// const numbersGreaterThanFive = numbers.filter(number => number > 5);

// console.log(numbersGreaterThanFive);



//                                                    **Sort Method:**
// - Q13: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// const products = [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Tablet', price: 500 }
// ];
// products.sort((a, b) => a.price - b.price);

// console.log(products);


//                                             **Reduce Method:**
// - Q14: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 




//                                                       **Find Method:**
// - Q15: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.


// const users = [
//   { id: 1, name: 'Darshan' },
//   { id: 2, name: 'Monish' },
//   { id: 3, name: 'Hardesh' }
// ];


// const filteredUser = users.filter(user => user.id === 2);

// const foundUser = users.find(user => user.id === 2);



//                                           **Combining Methods:**
// - Q16: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.

// const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

// const concatenatedString = strings
//   .filter(str => str.length > 5) 
//   .map(str => str.toUpperCase()) 
//   .reduce((accumulator, str) => accumulator + ' ' + str, ''); 

// console.log(concatenatedString);




//                                                **Callback Functions:**
// - Q17: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers); 

//                                                       **Error Handling:**
// - Q18: How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario.


// const array = [1, 2, 3, 4, 5];

// try {
//   const result = array.find(item => {
//     if (item === 3) {
//       throw new Error('Example error');
//     }
//     return item > 2;
//   });

//   if (result === undefined) {
//     throw new Error('Item not found'); 
//   }

//   console.log('Found:', result);
// } catch (error) {
//   console.error('Error occurred:', error.message);
// }


//                                    **Immutable Operations:**
// - Q19: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.



// const array = [1, 2, 3, 4, 5];


// const doubledArray = array.map(item => item * 2);

// console.log('Original array:', array); 
// console.log('Doubled array:', doubledArray); 


// const array = [1, 2, 3, 4, 5]
// const oddNumbers = array.filter(item => item % 2 !== 0);

// console.log('Original array:', array);
// console.log('Odd numbers array:', oddNumbers); 




//                                            **Performance Considerations:**
// - Q20: Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?




// Performance Implications
// map Method
// Behavior: The map method applies a provided function to each element of an array and returns a new array with the results. It transforms each element and collects the transformed values into a new array.

// Performance Considerations:

// Time Complexity: map has a time complexity of O(n), where n is the number of elements in the array. It needs to iterate through each element to apply the callback function.
// Memory Allocation: map allocates memory for a new array that holds the transformed values. This allocation adds overhead in terms of memory usage.
// forEach Method
// Behavior: The forEach method executes a provided function once for each array element. It does not create a new array but instead iterates over the existing array.

// Performance Considerations:

// Time Complexity: forEach also has a time complexity of O(n), where n is the number of elements in the array. It iterates through each element just like map.
// Memory Usage: Unlike map, forEach does not allocate memory for a new array. It operates directly on the existing array, which can be more memory-efficient if creating a new array is not necessary.
// Scenarios for Preference
// Transforming Data: Use map when you need to transform each element of an array and collect the transformed values into a new array. This is useful when you want to maintain immutability and create a new array with modified elements.

// Side Effects: Use forEach when you need to perform operations or side effects for each element in an array without modifying the array itself. For example, logging each element or updating external state.

// Memory Considerations: If memory efficiency is critical and you don't need a new array, forEach can be preferred because it avoids the overhead of allocating memory for a new array.

// Functional Programming: In functional programming paradigms where immutability is emphasized, map is often preferred due to its ability to transform data immutably and return a new array.

// Summary
// Use map when you need to transform each element of an array and collect the transformed values into a new array.
// Use forEach when you need to iterate over an array and perform operations or side effects for each element without creating a new array.
// Consider Performance: Both methods have similar time complexities, but forEach can be more memory-efficient if creating a new array is not required. Choose based on your specific use case regarding data transformation, immutability, and memory considerations.

















