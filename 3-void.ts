// Void is another special type given by TS.
// void represent functions that don’t return a value or return statements that do not return anything.

// Examples
let f1 = () => {}
let f2 = () => {
    return;
}

// We can only assign undefined, null, any, never and void to a void
let a:undefined;
let b:null;
let c:any;
let d = () => {
    throw new Error("Some error occured!");
};

let x:void;
x=a;
x=b; // Note: strictNullChecks sahould be false
x=c;
x=d();
x="Hello"; //Error
x=12; // Error


// When to use void? When we know a function will not return anything.
function showMesage():void {
    alert("Some mEssage")
}

// void vs undefined
// We can also use undefined instead of undefined
function alertMesage():undefined {
    alert("Some mEssage")
}

/* void and undefined are not same. They have one difference.
If we create a function type with void then it can has any return value and it will be ignored.
But if the function type created with type undefined, it cannot have return value at all. */
let f3: () => void;
f3 = () => {
    return "String"
}
f3 = () => {
    return 0
}

// But if we create a function type with undefined, then function implmentation will give error.
let f4: () => undefined;
f4 = () => {
    return "String"
}
f4 = () => {
    return 0
}
