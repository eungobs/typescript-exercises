// A function that takes two numbers as parameters and returns their sum
function sum(a: number, b: number): number {
    return a + b;
}

// A function that returns a fixed number
function fixedNumber(): number {
    return 42;
}

// A function that takes a string and an optional boolean parameter. 
// If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
function formatString(str: string, toUpper?: boolean): string {
    if (toUpper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}
