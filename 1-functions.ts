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
