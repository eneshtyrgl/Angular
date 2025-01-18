# TypeScript 101

## Table of Contents
1. [Advantages of TypeScript](#advantages-of-typescript)
2. [Type System](#type-system)
3. [Classes and Modules](#classes-and-modules)
4. [Compile Files](#compile-files)

## Advantages of TypeScript

TypeScript enhances JavaScript development by providing:

1. **Static Typing**
   - Catch errors during development instead of runtime
   - Better code documentation through type definitions
   - Enhanced IDE support and autocompletion

2. **Object-Oriented Features**
   - Classes
   - Interfaces
   - Modules
   - Generics

3. **Code Maintainability**
   - Easier refactoring
   - Clear contract definitions
   - Better team collaboration

Example of TypeScript's type safety:

```typescript
// JavaScript - No type safety
function add(a, b) {
    return a + b;
}
add("5", 3) // Returns "53" (string concatenation)

// TypeScript - With type safety
function add(a: number, b: number): number {
    return a + b;
}
add("5", 3) // Error: Argument of type 'string' not assignable to type 'number'
```

## Type System

### Basic Types

```typescript
// String
let color: string = "green";

// Number
let decimal: number = 7;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let colors: Array<string> = ["green", "purple"];

// Tuple
let tuple: [string, number] = ["hello", 13];

// Any (try to avoid)
let variable: any = 3;

// Void
function logMessage(): void {
    console.log("hello");
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// also TypeScript can infer types automatically
let obvious = "This is a string"; // Type: string
let numbers = [1, 2, 3];         // Type: number[]
```

### Interfaces and Classes

Interfaces define contracts in code:

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
    readonly createdAt: Date; // Read-only property
}

interface Employee extends User {
    department: string;
    salary: number;
}

// Usage example
const employee: Employee = {
    id: 1,
    name: "User",
    email: "user@example.com",
    department: "Engineering",
    salary: 75000,
    createdAt: new Date()
};
```

### Enums

Enums allow to define a set of named constants:

```typescript
enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

const userRole: UserRole = UserRole.ADMIN;

// Number-based enum
enum Direction {
    UP,     // 0
    DOWN,   // 1
    LEFT,   // 2
    RIGHT   // 3
}
```

## Classes and Modules

### Class Basics

```typescript
class Product {
    // Properties
    private id: number;
    public name: string;
    protected price: number;

    // Constructor
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Methods
    getFormattedPrice(): string {
        return `$${this.price.toFixed(2)}`;
    }
}
```

### Access Modifiers

- `public`: Accessible from anywhere (default)
- `private`: Only accessible within the class
- `protected`: Accessible within the class and its subclasses

### Inheritance

```typescript
class DigitalProduct extends Product {
    downloadLink: string;

    constructor(id: number, name: string, price: number, downloadLink: string) {
        super(id, name, price);
        this.downloadLink = downloadLink;
    }
}
```

## Compile Files

To compile the TypeScript code, TypeScript needs to be installed. If it is not installed, it can be installed globally using npm:

```bash
npm install -g typescript
```

After installing, TypeScript files can be compiled using the `tsc` command:

```bash
tsc file.ts
```

After compiling, you can run the resulting JavaScript file with Node.js:

```bash
node filename.js
```