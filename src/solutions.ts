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

function checkType(value: StringOrNumber): string | undefined {
    if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    }
}

console.log(checkType("Hello"));
console.log(checkType(42));

// ========= Solution 04 =========

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

console.log(getProperty(user, "name"));

// ========= Solution 05 =========

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadableBook extends Book {
  isRead: boolean;
}

function toggleReadStatus(book: Book): Book & ReadableBook {
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));

// ======== Solution 06 =========

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

console.log(student.getDetails());

// ======== Solution 07 =========

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));