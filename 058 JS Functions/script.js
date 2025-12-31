// console.log("Hey Akash, you are nice!");

// ⭐

function nice(name) {   // function declaration and body
    console.log("Hey " + name + " you are nice!");
}

nice("anyName");    // function calling or invokation

// ⭐
function sum(a, b, c = 3) {
    // ⭐here c is an optional parameter
    return a + b + c;
}

result = sum(3, 5);

console.log("Sum of these numbers is: ", result);

// result = sum(3);

// console.log("Sum of these numbers is: ", result); // output will be NaN (Not a Number) , as value of b is not passed into the function

result = sum(3, 5, 1);  // ⭐passing the optional value of c as 1

console.log("Sum of these numbers is: ", result);

// -----------------------------------------------------------------------------------------------------------------------------------

// ⭐ function stored in a variable
const func1 = (x)=> {
    console.log("Hii I am an arrow function ", x);
}

func1(23);