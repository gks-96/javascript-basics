const person = {


    name: "John",
    age : 25,

    greet : function() {
        console.log("hi , this is " + this.name);
        return ;
       },

    greet2()  {
        console.log("hi , this is " + this.name);
        return ;
    }

    };


console.log(person)

person.greet()
person.greet2()
// console.log(person.greet())
// console.log(person.greet2())