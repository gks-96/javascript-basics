'use strict';


const oneWord = function (str)
{
  return  str.replace(/ /g,'').toLowerCase();
}

const capitalizeFirstWord = function(str){
  const[first, ...others] = str = str.split(' ');
  return [first.toUpperCase(),...others].join(' ');
}


// higher order function - eg in which we are passing a function
// instead of giving it any other name, a common convention is to give it a callback names
const transformer = function(str,callback){

  console.log(`Transformed string:  ${callback(str)}  `);
}

transformer('JavaSript is the best !',capitalizeFirstWord);


// javascript uses callback all the time

// higher order function - eg in which

const greet = (greeting ) =>
{
  return (name) =>
  {
    console.log(`${greeting } ${name}`)
  }
}

// why it works - due to closures, which are a complex topic in javascript
const greeterHey = greet("Hey")
greeterHey("Jonas")
greeterHey("Steven")