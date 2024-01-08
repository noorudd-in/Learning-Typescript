// Type inferred as string[] which means it is an array of strings
let arr1 = ["TS", "JS"]

// To explicity set the type of an array
let arr2: number[] = [1, 2, 3]
let arr3: number[] = [1, 2, 3, "4"] // All element shoudld be numbers

// Must be an array even if there is only one element
let arr4: number[] = 1 // Error
let arr5: number[] = [1] // OK

// For empty arrays, the type inferred will be never[]
let arr6 = []

let arr7: string[] = ["Ts", "Js", "Java", "Py", "Cpp"];
for (const lang of arr7){
    // TS automatically understand that each element is of type string so string methods are accessible.
    console.log(lang.toLocaleUpperCase())
    console.log(lang.toExponential()) // Error as number method not allowed on string.
}

/* NOTE: If we want to have an array with multiple type, then one way is to use any. But ANY
should be avoided as much as possible. The another way is to use union which will be dicussed later */

// If we want to have array structure defined, we can do something like
let arr8: [string, boolean]; // An array with 2 elements, 1st number and 2nd string.
arr8 = [] // Error as atleast 2 elements are needed.
arr8 = ["Admin", true, 23, "Hello World"] // Error as TS gets more than 2 elements.
arr8 = ["Admin", true] // OK
arr8 = [true, "Admin"]  // Error as the types of 1st and 2nd element is not as defined.
arr8[1] = "Admin" // Can't reassign with different type too.

// NOTE: Although arr8 needs 2 values, less or more will lead to TS error but push will still work.
arr8.push("User") // OK, as this is exception.
