# JS Quiz 1 - Solutions

Q.1 - What is JavaScript?
* JavaScript is a scripting language used to create and control dynamic website content.

Q.2 - What is the difference between b/w let and var?
* `let` is block scoped while `var` is global scoped.

Q.3 - Why do we prefer const over var?
* We prefer `const` over `var` because `var` allow us to reassign the variable & their value but `const` doesn't. 

Q.4 - What is the use of javascript in web browsers?
* JavaScript makes websites more interactive and allow them to create dynamic content.

Q.5 - What are Objects?
* `Objects` are the collection of key-value pairs, which can contains any data type. They are used to store and organize data in a proper manner.

Q.6 - What is an array and how is it different from an Object in Javascript?
* `Arrays` are ordered collections of data. It is used to store a list of values in a single variable. The main difference b/w `array` and `objects` is that in `array`, the element is identified by its index number but in `object`, the element is identified by its key.

Q.7 - What is a function?
* `Function` is a block of code designed to perform a specific task. It can be reused n number of times in the whole code.

Q.8 - What are the primitive data types in Javascript?
* Primitive data types are the data types that doesn't have objects and also there is no property. There are some types of it are: Number, String, Boolean, Null, Undefined, BigInt and symbol.

Q.9 - What is DOM?
* A DOM is the Document Object Model which is a Tree structure containing all the different elements of a webpage as nodes.

Q.10 - Why do we need DOM?
* We need DOM because it lets us interact with and change the content, structure, and style of a web page using code. It turns the HTML of a page into a tree-like structure so we can easily add, remove, or modify elements, making web pages dynamic and interactive.


## Coding Solutions :

Q.1 - Average of array nums in JavaScript
```js
const average_of_array = (arr) => {
	let sum = arr.reduce((result, item) => result+item, 0)

	return (sum / arr.length)
}

console.log(average_of_array([1, 2, 3, 4, 5]))
```

Q.2 - Swap two numbers by reference?
```js
const swap_nums = (num1, num2) => {
	let temp = num1
	num1 = num2
	num2 = temp

	return { num1, num2 }
}

console.log(swap_nums(2, 3))
```

Q.3 - Print the fibonacci sequence?
```js
const printFibonacci = (nterm) => {
   const number = nterm
   let n1 = 0, n2 = 1, nextTerm
   
   console.log('Fibonacci Series:')
   
   for (let i = 1; i <= number; i++) {
       console.log(n1)
       nextTerm = n1 + n2
       n1 = n2
       n2 = nextTerm
   }
}

printFibonacci(20)
```
Q.4 - Sort an array by both ascending and descending order?
```js
const sortArray = (arr) => {
	let ascending = new Int32Array(arr).sort()
	let descending = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(ascending),
		"descending": Array.from(descending)
	}
}

console.log(sortArray([3, 5, 29, 4, 10]))
```

Q.5 - Show a variable value in an HTML webpage using DOM?
```js
let a = 10
document.write(a)

