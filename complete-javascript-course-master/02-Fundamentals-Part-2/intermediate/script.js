'use strict';

let hasDriversLicense = false;
const passTest = true;

if ( passTest)
{
    hasDriversLicense= true;
}
// basic function syntax
// function declaration
function calAge1(birthyear){
    return 2037- birthyear;
}

const age1 = calAge1(1996);

// another way of defining function
//function expression - we can use this way only if we have defined the expression before utilizing it
const calcAge2 = function calcAge2(birthyear){
    return 2037-birthyear;
}



const age2 = calcAge2(1996);

console.log(age1,age2);

// 3rd way - arrow function - single line functino
// curly braces not required
//
const calAge3 = birthYear => 2037-birthYear;


const age3 = calAge3(1990);
console.log(age3);

// arrow function - when using it , we do not need to use the function keyword
const yearsTillRetirement = (birthYear,firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65- age;
    return retirement;
}

const age4 = yearsTillRetirement(1990,"James");
console.log(age4)