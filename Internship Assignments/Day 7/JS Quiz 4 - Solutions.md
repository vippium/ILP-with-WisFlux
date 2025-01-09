## JS Quiz 4 - Solutions :

1. What are anonymous functions in JavaScript?
   * Anonymous functions in JavaScript are functions that do not have a name. These functions are often used when you need to pass a function as an argument to another function or when a function is used only once.  Often passed as arguments to functions like setTimeout, map, filter, etc. 
   Example:- 
   ```js
    setTimeout(function() {
    console.log("Hello");
    }, 200);

    setTimeout(() => {
    console.log("Hello");
    }, 200);
   ```
   

Q.2 - Explain Strict comparison and Abstract comparison in JavaScript?
 * Abstract comparison checks only the value but performs type coercion if the types are different.
 * JavaScript tries to convert the values to the same type before comparing.
   ```js
   console.log(6 == '5') // Output:- True
   console.log(6 === '5') // Output:- False
   ```
   
Q.3 - Difference between `Arrow` function and `regular` functions?
 * `Arrow` functions have a more concise syntax, inherit the "this" keyword from the surrounding scope, and lack their own "arguments" object, while regular functions have their own "this" binding and access to the "arguments" object within the function itself

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```


Q.4 - What is Hoisting In JavaScript?
 * Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed.
 * There are two types of Hoisting available in JavaScript:
    1. **Variable Hoisting**: `var` declarations are hoisted, but only the declaration. let and const declarations are hoisted, but not initialized, and accessing them before declaration which causes ReferenceError.
    Example:
        ```js
        console.log(x);
        var x = 5;
        console.log(x); 
        ```

    2. **Function Hoisting**: Function declarations are hoisted completely, means both the function's name and its body are available anywhere in the scope. They are not hoisted. 
    Example:
        ```js
        greet();

        function greet() {
        console.log("Hello!");
        }
        ```

Q.5 - JavaScript is a garbage collected programming language, explain how?
 * JavaScript is considered a garbage-collected programming language because it automatically manages memory by reclaiming memory space that is no longer in use.
 * It completely freeing dev's from manually managing memory allocation and deallocation.
 * It uses reference counting to track how many pointers exist to an object or value. If an object is no longer under use, it becomes eligible for garbage collection because it can’t be accessed anymore

Q.6 - Explain Shallow copy vs Deep copy in Javascript ?
 * `Shallow Copy` creates a new object, but it only copies the top-level properties. If the original object contains nested objects or arrays, the shallow copy will reference the same nested objects.
 * `Deep Copy` creates a new object and also recursively copies all the properties, including nested objects or arrays. Each nested object is copied as a new independent object, so changes to the copied object do not affect the original object.
 
7. What is `Object.freeze` method ?
 * `Object.freeze()` is a method in JavaScript that prevents modifications to an object. Once an object is frozen, it cannot be altered: no properties can be added, deleted, or modified.
 * `Object.freeze()` only freezes the top-level properties. If the object has nested objects or arrays, those nested structures will still be mutable unless you explicitly freeze them.

## Coding Solutions :

Q.1 - Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.
```js
function generateRandomNumber() {
  const range1 = Math.floor(Math.random() * 101) - 100;  // Range -100 to 0
  const range2 = Math.floor(Math.random() * 101) + 800;  // Range 800 to 900
  
  return Math.random() < 0.5 ? range1 : range2;
}
console.log(generateRandomNumber());
```