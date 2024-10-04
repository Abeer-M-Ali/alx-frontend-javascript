# 0x02. ES6 Classes

## Description
This project focuses on understanding and implementing ES6 classes in JavaScript. It covers key concepts like defining classes, adding methods, using static methods, inheritance, and metaprogramming. By the end of the project, you will have a solid grasp of ES6 classes and their practical applications in Object-Oriented Programming (OOP).


## Learning Objectives
By the end of this project, you should be able to explain the following concepts without external help:
- How to define a class
- How to add methods to a class
- Why and how to add static methods to a class
- How to extend a class from another class
- Metaprogramming and symbols in JavaScript

## Requirements
- Files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- `README.md` file at the root of the project folder is mandatory
- Use the `.js` extension for all JavaScript files
- Code should be tested using `Jest` and the command `npm run test`
- Code should be linted using `ESLint`
- All tests and lint checks must pass using `npm run full-test`

## Setup Instructions
1. **Install NodeJS 12.11.x:**
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
    Verify the installation:
    ```bash
    nodejs -v
    npm -v
    ```

2. **Install Jest, Babel, and ESLint:**
    Navigate to your project directory and run:
    ```bash
    npm install
    ```

---

## Task Breakdown

### 0. You used to attend a place like this at some point
Implement a class named `ClassRoom` that accepts one attribute:
- **maxStudentsSize** (Number) stored as `_maxStudentsSize`

**File:** `0-classroom.js`

### 1. Let's make some classrooms
Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34.

**File:** `1-make_classrooms.js`

### 2. A Course, Getters, and Setters
Implement a class named `HolbertonCourse` with the following attributes:
- **name** (String)
- **length** (Number)
- **students** (array of Strings)

Each attribute should have a getter and setter. Ensure correct type validation.

**File:** `2-hbtn_course.js`

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named `Currency` with the following attributes:
- **code** (String)
- **name** (String)

Add a method named `displayFullCurrency` to return the format `name (code)`.

**File:** `3-currency.js`

### 4. Pricing
Implement a class named `Pricing` with the following attributes:
- **amount** (Number)
- **currency** (`Currency` object)

Add a method named `displayFullPrice` and a static method named `convertPrice`.

**File:** `4-pricing.js`

### 5. A Building
Implement an abstract class named `Building` with the attribute `sqft` (Number). Classes extending `Building` must implement a method named `evacuationWarningMessage`.

**File:** `5-building.js`

### 6. Inheritance
Create a class `SkyHighBuilding` that extends `Building`. It should have a new attribute `floors` and override the method `evacuationWarningMessage`.

**File:** `6-sky_high.js`

### 7. Airport
Create a class named `Airport`. Override the `toString()` method to return `[object CODE]`.

**File:** `7-airport.js`

### 8. Primitive - Holberton Class
Create a class named `HolbertonClass`. When cast into a Number, it should return its size. When cast into a String, it should return its location.

**File:** `8-hbtn_class.js`

### 9. Hoisting
Fix the given code to work properly.

**File:** `9-hoisting.js`

### 10. Vroom
Create a class named `Car` and implement a `cloneCar` method to return a new object of the class.

**File:** `10-car.js`

## Author

- **Abeer Ragab** 

  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/abeerragab5211)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/abeer-ragab-b25872260/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/Abeer-M-Ali)