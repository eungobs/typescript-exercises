// Variable Declarations

// Declare a variable that holds a string value without explicitly stating its type
let greeting = "Hello, TypeScript";

// Declare a variable that holds a number value and explicitly state its type
let age: number = 25;

// Declare a variable that can hold a value of any type
let anything: any = "This can be anything";
anything = 42; // Now it's a number

// Declare a variable that can hold either a string or a number
let mixed: string | number;
mixed = "This is a string";
mixed = 123; // Now it's a number
