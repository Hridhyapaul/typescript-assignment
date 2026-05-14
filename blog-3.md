# How do `Generics` allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

# TypeScript `Generics` কীভাবে Reusable এবং Strictly Typed Components বানাতে সাহায্য করে?

TypeScript শেখার সময় আমাদের সবাইকেই আলাদা আলাদা টাইপের জন্য আলাদা function লিখতে হয়।  
কিন্তু `Generics` ব্যবহার করলে আমরা একটাই function লিখে সব ধরনের data handle করতে পারি — **without losing type safety**।

# Problem: Without `Generics`

ধরো আমাদের string return করার function দরকার:

```ts
function getString(value: string): string {
  return value;
}
```

এখন number এর জন্য আলাদা function:

```ts
function getNumber(value: number): number {
  return value;
}
```

সমস্যা কী?

- একই কাজ বারবার করতে হচ্ছে  
- code duplicate হচ্ছে  
- maintain করা কঠিন  

---

# Solution: `Generics`

`Generics` আমাদের allow করে:

> “আমি এখন type জানি না, কিন্তু পরে জানবো”

---

# Basic `Generic` Function

```ts id="gen-basic"
function identity<T>(value: T): T {
  return value;
}
```

---

# এখানে কী হচ্ছে?

- `T` হলো একটি placeholder type  
- যখন function call করা হবে, তখন `T` replace হবে real type দিয়ে  

---

# Usage Example

```ts id="gen-use-1"
const result1 = identity<string>("Hello");
const result2 = identity<number>(100);
```

---

# সবচেয়ে important part: Type Safety

```ts id="gen-safe"
const result = identity("Hello");

result.toUpperCase(); // ✅ OK

result.toFixed(); // ❌ Error (string এ number method নেই)
```

- TypeScript নিজেই বুঝে নিচ্ছে `result` string

---

# `Generics` কীভাবে Reusable করে?

একটাই function সব data type handle করতে পারে:

```ts id="gen-reuse"
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(10);
identity<boolean>(true);
```

- একই function  
- different types  
- zero duplication  

---

# `Generic` Array Example

```ts id="gen-array"
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

---

## Usage:

```ts id="gen-array-use"
const num = getFirstElement<number>([1, 2, 3]);
const str = getFirstElement<string>(["a", "b", "c"]);
```

---

# Conclusion

- `Generics` TypeScript এর সবচেয়ে powerful feature  
- এটা reusable code বানাতে সাহায্য করে  
- একই সাথে type safety বজায় রাখে  
- Real-world projects (API, React, libraries) এ heavily used  
- `T` হলো placeholder type যা পরে define হয়  