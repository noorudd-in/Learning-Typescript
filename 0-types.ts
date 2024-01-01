const fullname: string = "Hello Noor!"
const age: number = 29;
const isAdmin: boolean = true;

// TS will give error if you try to call a vairable:
//fullname();

/*
Even if you don't explicity mention type. TS will detect it automatically.
const age = 29
*/

const n1 = '2';
const n2 = '5';

/*
TS is smart.
TS can identify that if and else if both are checking for n2 and not for n1.
*/
let value = '2'
if (value !== n1){
    console.log("Value is n2")
} else if (value == n1) {
    console.log("Value is n2")
}

/*
Here we have used template strings. So if we use tsc <filename.ts> TS will convert this to ES3 code.
Therefore instead of template strings we see concat.
To use the latest version of ECMAScript, use the command as tsc -t ES6 <filename.ts>
Learn more: https://www.typescriptlang.org/docs/handbook/2/basic-types.html#downleveling
*/
console.log(`The numbers are ${n1} & ${n2}`);

function add(num1: number, num2: number){
    return num1 + num2
}
console.log(add(+n1, +n2))
