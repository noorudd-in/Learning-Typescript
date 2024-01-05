// unknown type means that the type of variable is not known.
// Unknown type is a top type in TypeScript. You can assign anything to an unknown type.

// We can assign any type to unknown
let unknownVar:unknown;
 
unknownVar = true;
unknownVar = 10;
unknownVar = 10n;
unknownVar = "Hello World";
unknownVar = ["1","2","3","4"]
unknownVar = {firstName:'', lastName:''};
unknownVar = null;
unknownVar = undefined;
unknownVar = Symbol("key");

// But we can only assign unkown to unknown and any type
let val1:unknown = unknownVar;
let val2:any = unknownVar;
let val3:string = unknownVar; // Error