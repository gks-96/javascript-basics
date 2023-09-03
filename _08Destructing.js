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

// this is called object destructing
const printName = ({name})  => {
    console.log(name);
}
printName(person);
const {name,age} = person;

