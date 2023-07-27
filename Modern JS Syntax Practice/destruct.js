const user = {
    id : 1,
    name : "shakib",
    age : 30,
    // education : {
    //     degree : 'masters',
    // },
};

// extract the name from object and assign in
// another variable

// previous way
var name = user['name'];
console.log(name);

// new way
var {name: title} = user;
console.log(title);

const {education: {degree: z} = {}} = user
console.log(z);


// array destructuring

var numbers = [1,2,3,4,5];
var [,a,,,b] = numbers;
console.log(a, b);

var arr = [1,2,[3,4,100],5];
var [,,[a,b]] = arr;
console.log(a, b);