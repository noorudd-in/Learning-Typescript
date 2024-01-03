// Type checking with Functions

/* If we don't specify type, it will type any which is dangerous.
In the below eg, we are adding two numbers but since without type, wer can pass strings also */
let f1 = (num1, num2) => {
  num1.toUpperCase();
  return num1 + num2;
};
f1(1, 2);
f1("1", "2");

// Specifying the function argument types
let f2 = (num1: number, num2: number) => {
  num1.toUpperCase(); // This is lead to error ad number don't have toUpperCase()
  return num1 + num2;
};
f2(1, 2); // OK
f2("1", "2"); // Error

// We can specify the return type of function as well;
let f3 = (num: number): string => {
  return num * num; // Error as function is returning number but we want string
};

let f4 = (num: number): string => {
  return "Square is: " + num * num; // No Error
};

// If the function doesn't have return keyword, the return type will be void and the return value will be undefined.
let f5 = () => {
  console.log("Hello World");
};

// Function that never reach to return keyword i.e infinite loops have the type never.
// never is a special type in TS.
let f6 = () => {
  while (true) {
    continue;
  }
};

//Function Overloading
// In JS , we can create more than one function with same name but in TS, we can't
function f7() {
  console.log("I am function F7");
}

function f7() {
  console.log("I am another function F7");
}

// But to explicitly overload, we need to create overload signature, like as below.
// Now there will be no error and based on the argument type, the function will be executed.
// Overload Function Signature
function overload(num: number): string;
function overload(val: string): string;
/* Implementation must be immediately below signature and there should be nothing between them, no other code.
Else TS will not identify and will give missing error. */
// Overload Function Implementation
function overload(args: number | string) {
  if (typeof args == "number") {
    console.log("You have passed a number");
  }
  if (typeof args == "string") {
    console.log("You have passed a string");
  }
  return "0";
}

overload(1);
overload("Hello");
overload(true); // Error as string or else number is accepted.

// Optional Parameter,
/*In JS, while calling a function, if we pass less parameter than expected, the other will be treated as undefined.
If we pass excess parameter then it will be ignored.
But in TS, we need to pass exact parameter only. But there exist optional parameter too */
function f8(num1: number, num2?: number) {
  return num1 + num2 // TS understands num2 can be undefined
}
f8() // Error
f8(1); 
f8(1, 2);
f8(1, 2, 3);// Error

// Optional parameter must be in the last;
function f9(num1: number, num2?: number, num3: number) {
  return num1 + num2; // TS understands num2 can be undefined
}


// Default Paremeters
// We can also pass default parameter and that will be used if no value or undefined is passed.
function f10(num1: number, num2: number, num3: number = 2) {
  return num1 + num2 + num3; // TS understands num2 can be undefined
}
f10(1, 2, 3) // Works
f10 (1, 2) // This even works