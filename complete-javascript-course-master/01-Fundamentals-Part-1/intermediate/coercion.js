// + converts the number to string
let num = 42;
console.log("the answer is " + num);


// coercion for arithmetic operation
let num2 = "5";
let res2 = num2*2;
console.log(res2);  // coercion on arithmetic operators

// coercion for equality operator
let num3 = 10;
let str3 = "10";
let res3 = num3==str3;   // coercion for comparison
console.log(res3);

// coercion on String, non-empty string is considered true
let val = "Hello"
if ( val)
{
    console.log("value is non empty")
}
