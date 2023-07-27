// `this is template literals`
var a = 1;
var b = 2;

console.log('I am ' + a + ' and i am ' + b);
console.log(`I am ${a} and I am ${b}`);

// function editable(strings, ...values) {
//     const m = strings.reduce((prev, current) => {
//         return prev + current + (values.length ? "Mr. " + values.shift() : "");
//     }, "");
//     return m;
// }

function editable(strings, ...values) {
    console.log(strings, values);
}
console.log(editable`I am ${a} and I am ${b}`);