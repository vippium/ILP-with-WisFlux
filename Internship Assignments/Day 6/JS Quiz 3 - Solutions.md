## JS Quiz 3 - Solutions :

Q.1 - Explain as much as you know about objects in javascript? (A long answer expected)
 Objects in JavaScript ?

* Objects in Javascript are used to store collections of data in the key-value pair.
* The the keys have to be strings; the values can be any sort of data, including numbers, strings, arrays, or other objects..

* Some of the Iteration Techniques are :
   * for...in loop to iterate keys.
   * Object. keys() and Object. values() methods.
   * Extraction of specific values using destructuring.
   * Conversion of array entries into type of Object.
   * Objects are arbitrary similar to Python dictionaries.

Q.2 - Make a "class" based alternative to the object based vector template ?
```js
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Method to set the x and y values
  setValues(x, y) {
    this.x = x;
    this.y = y;
  }

	create(x, y) {
		let obj = Object.create(this)
		obj.setX = x
		obj.setY = y
		return obj
	}
}

let vec1 = new Vector()
console.log(vec1.create(1, 2)) // Output:- Vector { x: 1, y: 2 }
```

Q.3 - Do you think JavaScript is the language of the future?
* JavaScript can possibly be the language of the future.
* But despite these idiosyncrasies and unpredictable bugs—it gave birth to the infamous 
phrase "There are a lot of ways to shoot yourself in the foot with JavaScript"
* By making improvements in its design and addressing these issues, 
JavaScript can become a programming language that is not only foundational but also looks toward the future.
* It has become very popular in web, mobile, server-side applications.


## Coding Solutions :

1. Write code implementations for the following Array methods ?
* Array which we are going to use for implementing the various methods of Array: `const arr = [1, 2, 3, 4]`
   * *forEach* :- 
      ```js
      const arr = [1, 2, 3, 4]
      
      arr.forEach(item => console.log(item)) // Output:- 1 2 3 4 5 (It will print each number in new line)
      ```
   * *Map Method* :-
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.map(num => num * 2)) // Output :- [2, 4, 6, 8]
      ```
   * *Filter Method* :- 
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.filter(num => ((num % 2) == 0))) // Output :- [ 2, 4 ]
      ```
   * *Reduce Method* :- 
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.reduce((prev, initial) => prev+initial, 0)) // Output :- 10
      ```
   * *Includes Method* :- 
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.includes(2)) // Output :- true
      console.log(arr.includes(5)) // Output :- false
      ```
   * *Some Method* :-
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.some(element => element % 2 === 0)) // Output :- true
      ```
   * *Every Method* :-
      ```js
      const arr = [1, 2, 3, 4]
      
      console.log(arr.every(element => element % 2 === 0)) // Output :- false
      ```
   
2. Simple Array Implementation
```js
const arr = [2, 55, 12, 90, 69]

console.log(arr) // Output:- [2, 55, 12, 90, 69]
```