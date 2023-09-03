
// for const we cannot change values
// but we are still able to edit arrays
// this is because the const stores only the address of the hobbies array
// we are not changing that,
// but we can change(add/remove ) elements from the array
// and they will be reflected in the array
const hobbies =['Sports', 'Cooking'];

for ( let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => "Hobby: " + hobby));

console.log(hobbies)

hobbies.push('Programming')

console.log(hobbies)

const copiedArray = hobbies.slice();
console.log(copiedArray);

// the first 2 values get modified
const [h1,h2] = hobbies
console.log(h1,h2)