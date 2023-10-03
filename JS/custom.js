//### DEV TOOLS + CONSOLE.LOG



// write this command: `console.log(“Hello, World!”);`
console.log ("Hello, World!");

//Open Dev Tools. Click on the "Console" tab. What do you see?
// = Hello, World!

// take away the quotes from your `console.log`, 
//     so it reads: `console.log(Hello, World!);`
//console.log(Hello, World!);

//What happens in the console? Read the error very carefully.
//Uncaught SyntaxError: missing ) after argument list

// Add the quotes back to your `console.log`.
console.log ("Hello, World!");

// Add another `console.log` so that your name appears in the browser’s dev tools.
console.log ("Lavender!");

// Add `2+2` in a `console.log` and check your answer in the console.
console.log ("2+2");

// What happens when you add quotes around each number?
console.log ("2"+"2");

// What happens when you don’t add quotes around each number?
console.log (2+2);





//### Alerts

//In your JS file, write `alert(“Hello, World!”);`
alert ("Hello, World!");

//Refresh the page in the browser - what happens?
//127.0.0.1:5501 say Hello, World!

//What are some real-life alerts you have seen?
//The first type of alert I usually see are sign up alerts for email subscriptions when I visit a new site.

//Write another alert that copies one you might see on a website.
alert ("This website uses cookies");

//What happens to the first alert?
//It shows up first and then the new alert follows after the "ok" button is clicked.




//### Prompts (And Declaring Your First Variable!)

//In your JS file, write:
let firstName = prompt("What is your first Name?");
console.log(firstName);

//Answer the prompted alert & look in the console, what do you see?
// Lavender


// What happens when you add quotes to `firstName`?
//let firstName = prompt("What is your first Name?");
// console.log("firstName");
// firstName is returned in the console instead of the inputted text Lavender