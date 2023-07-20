// normal js function
function number(){
    return 10;
}

// arrow function
let numbers = (a, b) => {
    return a+b;
}


// arrow function -> more simpler
let numbers_simple = () => 10;


console.log(numbers(10, 20));

/// why fat arrow is needed?
/// this keyword outside and inside the forEach is different,
/// hence it is showing undefined
var javascript = {
    name:'Farhan',
    libraries:['react', 'Angular', 'vue'],
    printlibraries: function(){
        // self = this;
        this.libraries.forEach(function(a){
            console.log(`${this.name} loves ${a}`);
        })
    },
};

javascript.printlibraries();


/// now with fat arrow function --->
var javascript = {
    name:'Farhan',
    libraries:['react', 'Angular', 'vue'],
    printlibraries: function(){
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`);
        })
    },
};

javascript.printlibraries();


/// new keyword in fat arrow function
/// every function is JS is a constructor function
/// but not every arraow function is an constructor

function person(name) {
    this.name = name;
}

var sakib = new person('shakib');

// convert into arrow function and it throws error

// let persons = (name) => {
//     this.name = name
// };

// var shakib = new persons("shakib");
