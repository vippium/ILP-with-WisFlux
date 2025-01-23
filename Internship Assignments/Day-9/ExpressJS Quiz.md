Q.1 - What is NodeJS?
* Node JS is an open-source and cross-platform JavaScript runtime environment.
* Node.js runs on the V8 JavaScript engine.
* It is used to run Javascript codes outside the web browser.

Q.2 - What is V8 Engine?
* The V8 engine is developed by Google.
* V8 engine makes JavaScript run faster in browsers.
* It converts the Javascript code into machine language instead of reading it line by line.
* Every chromium-based browsers uses the V8 Engine.

Q.3 - What is Event Loop in NodeJS?
* Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
* The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
* The event loop allows us to use callbacks and promises.
* The event loop executes the tasks starting from the oldest first.

Q.4 - What is the use of `tsconfig.json` file?
* The `tsconfig.json` file specifies the root files and the compiler options required to compile the project.
* JavaScript projects can use a `jsconfig.json` file instead, which acts almost the same but has some JavaScript-related 
compiler flags enabled by default.

Q.5 - What are the methods provided by `fs` module to manipulate files?
* There are so many methods which are provided by `fs` module to manipulate files. Some of them are :
    * `fs.access()`: check if the file exists and Node.js can access it with its permissions.
    * `fs.append()`: append data to a file. If the file does not exist, it creates the file.
    * `fs.chmod()`: change the permissions of a file specified by the filename passed.
    * `fs.chown()`: change the owner and group of a file specified by the filename passed.
    * `fs.close()`: close a file descriptor.

Q.5 - What is API ?
* API stands for **Application Programming Interface**.
* It is a set of rules and tools that let different software applications communicate with each other.
* API is used to send data to servers or to get data from servers.

Q.6 - What is JSON format ?
* JSON stands for **JavaScript Object Notation**.
* JSON is a lightweight format for storing and transporting data.
* JSON is a "self-describing" and easy to undersand format.
* JSON is often used when data is sent from a server to a web page.

Q.7 - Why we use JSON format for API ?
* JSON is compact, which means it reduces the amount of data transferred between servers and clients, making APIs faster.
* Its simple structure is human-readable, making it easier for developers to understand and debug.
* JSON works with almost all programming languages, which makes it widely compatible and easy to use.
* JSON can be parsed and processed quickly by machines, especially compared to formats like XML.

Q.8 - What is a Framework ?
*  framework in programming is a tool that provides ready-made components or solutions that are customized in order to speed up development. 
* It provides reusable tools, libraries, and best practices to simplify development tasks, saving time and effort.
* It is like a pre-designed blueprint for a house.
* Examples are : Python, NodeJS, ExpressJS, etc.

Q.9 - How an HTTP Communication works ?
* A client sends an HTTP request to a server. The request includes methods, URL, and other data.
* The server receives the request and processes it. This may involve fetching data, performing logic, or interacting with a database.
* The server sends an HTTP response back to the client. The response includes status code, content and other optional headers like caching instructions.
* The client processes the server's response by rendering it on web page or by displaying it on an app.

Q.10 - What is Middleware in ExpressJS ?
* Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.
* These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
