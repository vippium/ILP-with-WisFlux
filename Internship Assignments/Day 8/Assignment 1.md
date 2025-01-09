## Typescript Quiz 1 Solutions :

Q.1 - What are the basic data types in TypeScript?

There are commonly three types of data types in TypeScript: *Static, Generic and Decorators.*

Static is further divided into two types: **Primitive** and **User-Defined**.

* In Primitive, there are some types of data types in TS, which are: `Number`, `Boolean`, `String`, `Null` and `Any`.
* Typescript data types are same as Javascript because it is the subset of JS.

Here are some of the data types with examples :-
1.  `Number`: It is used to represent both Integer as well as Floating-Point numbers.
    ```ts
    let age: number = 30;
    let marks: number = 30.5;
    ```
2. `Boolean`: It is used to represent true and false of the statement outputs.
    ```ts
    let isReady: boolean = true;
    ```
3. `String`: It is used to represent a sequence of characters.
    ```ts
    let first_name: string = 'Vipin';
    let last_name: string = "Prajapat";
    ```
4. `Null` : It is used when an object does not have any value but user want it to be run on output screen.
    ```ts
    let empty: null = null;
    ```
5. `Any` : It comes under special data types. It is used when a type of variable is unknown or not yet defined.
    ```ts
    let x;
    console.log(typeof x);
    ```

Q.2 - What is Generic data type.
 * Generic data types are used to create a reusable component which can work with multiple data type instead of only one.
 * It provides a mechanism to build reusable components. It keeps the program elastic and scalable over the long term.
 * TypeScript uses them with the use of the type variable that represent types. The type of a generic function is just as for non-generic functions, with its type parameters listed up front, similar to function declarations.

 Q.3 - What is type inferring in TS ?
 * Type inference occurs when compiler automatically assigns a type to a variable without explicitly specifying.
 * Example :-
    ```ts
    let a = 10
    let b = "Hello"

    b = a   //Throws an error as data type cand be assigned to another data type i.e. num to string.
    ```
Q.4 - What are the possible ways to define typing for functions?
* There are two way to define typing for function :-
    * Using pre-defined type like string or number.
    * Using Generics.

Q.5 - How to define Generic type for Classes ?
* Here is the way to define the generic type for classes:
    ```ts
        class Person<N, A> {
        name: N;
        age: A;

        constructor(name: N, age: A) {
            this.name = name;
            this.age = age;
        }

        display(): void {
            console.log(`${this.name} --> ${this.age}`);
        }
    }
        const p1 = new Person<string, number>("Vipin", 24);
        p1.display();
    ```

