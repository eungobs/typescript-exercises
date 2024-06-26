// Basic Calculator class with input validation and division handling
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero";
        } else {
            return a / b;
        }
    }
}

// Example usage
const calc = new Calculator();
console.log(calc.add(5, 3));      // Output: 8
console.log(calc.divide(10, 2));  // Output: 5
console.log(calc.divide(5, 0));   // Output: "Error: Division by zero"
