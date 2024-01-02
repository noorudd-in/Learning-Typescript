// never is a special type in TS. Let's see where can never be inferred.
let printmsg = (msg: string) => {
  if (typeof msg == "number") {
    // The msg will always be string so this if block will never run.
    // So the type of msg inside this if block is never by default
    msg;
  } else {
    // But the type of msg will be string in else block
    msg;
  }
};

/*
In the below function, while loop will never end so this function will never reach the return statement
Thus, the type is never
*/
let infinteLoop = () => {
  while (true) {
    continue;
  }
};

// Since this function will always throw error, it is also never.
let neverFunction = () => {
  throw new Error("Some error occured!");
};

/*The above examples have function expressiosn, thus TS inffers the type as never,
but if the same function declarative then it will be inferred as void type */
function anotherneverFunction() {
  throw new Error("Some error occured!");
}
// Why? Check this interesting article: https://stackoverflow.com/questions/40251524/typescript-never-type-inference

// Characteristics
let v1: number;
let v2: string;
let v3: symbol;
let v4: any;

let nevervar = () => {
  throw new Error("Some error occured!");
};

// We can assign never to any other type:
v1 = nevervar();
v2 = nevervar();
v3 = nevervar();
v4 = nevervar();
// But we cannot assign any other type to never (except never itself).
nevervar = v1;
nevervar = v2;
nevervar = v3;
nevervar = v3;

// Exception: We can only assign never to never type:
let nevervar2 = () => {
  throw new Error("Some error occured!");
};
nevervar = nevervar2;
