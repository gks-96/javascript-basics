const  name = "max";  // const - value should not change over the course of time

let age = 29  // let - value can change over the course of time

const hasHobbies = true;
console.log(name);



const summarizeUser =  (username,userAge,userHasHobby) =>{
    return ("Name is " + username + " age is " + userAge + " userHasHobby  " + userHasHobby);
}

console.log(summarizeUser(name,age,hasHobbies));