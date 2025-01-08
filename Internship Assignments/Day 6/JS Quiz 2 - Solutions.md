## JS Quiz 2 - Solutions 

Q.1 - Why do we use `functions` in JavaScript?
 * `Functions` are essentially re-usable blocks of code. We use `functions` for those problems or methods which we need multiple times in our code.
 * Suppose we need to find area of triangle multiple times in our program. We simply create a `function` and call that function each time to find it.


Q.2 - What is `Function` Invocation?
 * A `Function` is Invoked when it's name is written with a parenthesis "( )" written in front of it. 

Q.3 - Does a `function` behave like an object in Javascript? Prove it by an example.
 * Yes, in JS, a `function` does behave like an object. This is because
 * This enables a `function` in JS to have special properties like the  they are first class objects. It means that it can properties and methods like regular objects.
   
   Example:
   ```js
   function sayHello() {
    console.log("Hello!");
    }
    sayHello.greeting = "Hi There !!!";

    console.log(sayHello.greeting);
    sayHello();
    ```

Q.4 - What are `Events` in Javascript
 * `Events` in JS are just specific triggers for something happening in the DOM. For example, if a particular element is clicked then that is called an `Event` in JS.

Q.5 - What is a `string`?
* A `string` is an array of characters.

Q.6 - What is an `array`? Is it static or dynamic in Javascript?
* An `Array` is an ordered collection of elements. They arrays are dynamic in nature. This means that there is no pre-defined length of the array.
* The size of the array is automatically increase or decrease based on the insertion or deletion of elements from it.

Q.7 - Difference between `Map` and `Set`?
* In `Maps`, the data is stored as a key-value pair whereas in `Set` data is a single collection of values that are unique and which doesn't allow duplicates.


Q.8 - Difference between `Array` and `Map`?
  * An `Array` is designed to store ordered elements indexed by numeric positions, whereas a `Map` stores key-value pairs with keys that can be of any type.
  * `Arrays` allow duplicate values, but in a `Map`, keys must be unique, though values can repeat.
  * `Arrays` are ideal for sequential data and provide fast access via indices, whereas `Maps` are better suited for associating values with unique keys, offering fast key-based lookups.


Q.9 - What are array methods? List a few names?
* Array methods are different functions that we can call on an array to perform different tasks like sorting the array or iterating through the items of the array.
* Some methods of an array are `map()`, `filter()`, `reduce()`, `sort()`, `reverse()`, etc.


Q.10 - In how many ways can we traverse through an array in Javascript?
 * Here are some of the ways to traverse an array in JS :- 
   ```js
   const arr = [1, 2, 3, 4, 5, 6]
   
   for(let i = 0; i < arr.length; i ++) {
       console.log(arr[i])
   }
   for (let num of arr) {
       console.log(num)
   }
   for (let num in arr) {
       console.log(num)
   }
   
   arr.forEach((item) => console.log(item))
   arr.map(num => console.log(num))
   ```

## Coding Solutions :

Q.1 - Reverse an Array in JavaScript?
```js
const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reverse())
```

Q.2 - Explain the properties of the join array method function via program?
```js
const arr = [1, 2, 3, 4, 5]

console.log(arr.join())
console.log(arr.join(' - '))
console.log(arr.join(','))
console.log(arr.join(' ABC '))
```


Q.3 - Show all the values of an array in a html webpage using DOM and forEach method?
```js
const arr = [1, 2, 3, 4, 5]

arr.forEach(item => document.getElementById("arrValues").innerText += item)
```


Q.4 - Merge sets in JavaScript?
```js
const set1 = new Set([1, 2])
console.log(set1)

const set2 = new Set(["Hello", "Everybody"])
console.log(set2)

const set3 = new Set([...set1, ...set2])
console.log(set3)
```