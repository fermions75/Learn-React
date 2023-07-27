var numbers = [1,2,3,4,5]
/// spread operator is immutable ---> not reference value
var new_numbers = [...numbers, 6,7,8,9,10]

console.log(new_numbers)

var number_1 = [1,2,3,4,5]
var number_2 = [1,2,3,4,5]

var numbers_new = [...number_1, ...number_2]
console.log(numbers_new)