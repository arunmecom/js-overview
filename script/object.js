// A JavaScript object is a collection of named values

// create object Using an Object Literal
var user = {
    name: "Arun",// property
    age: 27,
    // method
    intro: function(){
        console.log('I am', this.name, "my age is", this.age, 'years')
    }
}

user.intro();


// Create Object Using the JavaScript Keyword new
var person = new Object()

person.name = "Jon"
person.age = 30
person.intro = function() {
    console.log('I am', this.name, "my age is", this.age, 'years')
}

person.intro();

//
