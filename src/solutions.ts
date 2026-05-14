// ========= Solution 01 =========

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}

const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers1));

// ========= Solution 02 =========

function reverseString(text: string): string {
    return text.split('').reverse().join('');
}

console.log(reverseString("typescript"));

// ========= Solution 03 =========

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    }
}

console.log(checkType("Hello"));
console.log(checkType(42));

// ========= Solution 04 =========