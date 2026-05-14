"use strict";
// ========= Solution 01 =========
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers1));
// ========= Solution 02 =========
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString("typescript"));
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    else if (typeof value === "number") {
        return "Number";
    }
}
console.log(checkType("Hello"));
console.log(checkType(42));
// ========= Solution 04 =========
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};
console.log(getProperty(user, "name"));
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));
// ======== Solution 06 =========
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
// ======== Solution 07 =========
function getIntersection(arr1, arr2) {
    return arr1.filter((num) => arr2.includes(num));
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
//# sourceMappingURL=solutions.js.map