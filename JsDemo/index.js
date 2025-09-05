 function increaseFont(){
    console.log("Function called");
    setTimeout(() => console.log("requested"), 1000);
    document.getElementById("demo" ).style.fontSize="90px";

    // let dem=document.getElementById("demo");
    // dem.style.fontFamily="Sans-serif"
    console.log("Function completed");
} 
 
// ctrl k+c for commenting 
// ctrl k+u for uncommenting

// let x, y, z;  //Declaring 3 variables
// x = 5; // Assigning the value 5 to x
// y = 6; //Assigning the value 6 to y
// z = x + y; //Assigning the sum of x & y to z

// // var
// var a=10; // Declaring and assigning in same line
// var a="demo";

// // let
// let b;
// b=15;
// let c=5;
// // let c="demo" //re declaration is not allowed using let
// console.log(b);

// // const
// // should be assigned with value during declaration & Reassigning is not allowed
// const aa=50;
 
// var a;
// let b;

// a=5;
// b=10;
// c = a < b

// operators in javascript
// = --> this is assignment operator  
// + --> this is addition operator 
// * --> this is Multiplcation operator  
// >,< --> this is Comparision operator 
// / -->division
// % -->modulus
// ++ -->Increment
// -- -->Decrement
// == -->equal to
// != --> not equal 
// >= -->greater than or equal to
// <= -->lesser than or equal to
// i=5;
//      i <= 5 // true
//      i < 5 // false
// // )

// console.log(i);
// // i=i+1; //6
// i++; //7
// i--
// console.log(i);

// console.log(b%2==0);
// console.log(b);

//  Adding strings

let t1 = "Hello";
let t2 = "World";
let t3 = t1 + " 10 " + t2;

let l1 = "this is ";
l1 += "js course";

console.log(t3);
console.log(l1)

// bit operator
// & AND // && Logical AND
// | OR // || Logical OR
// ~ NOT // Logical NOT

a = 5;
b = 6;
c = 7;

if((a + b == 11) && (c - b == 1)){
    console.log("validation ok")
}
else{
    console.log("validation failed")
}

// if((a + b == 11) || (c - b == 1)){
//     console.log("validation ok")
// }
// else{
//     console.log("validation failed")
// }

// a = 6;
// b = 6;
// c = 7;

// if((a + b == 11) && (c - b == 1)){
//     console.log("validation ok")
// }
// else{
//     console.log("validation failed")
// }

// a = 6;
// b = 6;
// c = 7;

// if((a + b == 11) || (c - b == 1)){
//     console.log("validation ok")
// }
// else{
//     console.log("validation failed")
// }

a = 6;
b = 6;
c = 7;

if(c != 6){
    console.log("validation ok")
}
else{
    console.log("validation failed")
}

// Data types -->
    // String
    // Number
    // Booleans 
    // Undefined
    // null
    // Object

var y;
console.log(y);

var z = null;
console.log(z);

let aa = 10 + 5 + " Test";
console.log(aa);