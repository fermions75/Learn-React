// simple for loop
for(let i=0; i<=5; i++){
    console.log(i);
}

// for in loop
const myobj = {
    name: 'Javascript',
    estd: '1995',
}

for(i in myobj){
    console.log(myobj[i]);
}

// for of loop
const myarray = "[1,2,3,4,5]"
for(i of myarray){
    console.log(i)
}