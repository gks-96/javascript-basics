const age =18

if ( age ===18) console.log("you just became an adult")

const str = '18'
if( str === 18) console.log("you got it wrong")

/*
"==" (Double Equals):

"==" is used for loose equality or type coercion.
It checks if the values on both sides are equal after converting them to a common type if they are of different types.
For example, in JavaScript, "5" == 5 would return true because it converts the string to a number before comparison.
It might not always be suitable for strict equality checks, especially if you want to ensure both value and type are the same.
"===" (Triple Equals):

"===" is used for strict equality.
It checks if the values on both sides are equal and also checks that their types are the same.
For example, in JavaScript, "5" === 5 would return false because it doesn't coerce types and the string and number are of different types.
It's often recommended to use "===" for most equality comparisons, as it avoids unexpected type conversions.
 */