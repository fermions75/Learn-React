var arr = [1,2,3,4,5,6,7,8,9,10];
val = arr.find(function(curr_val, curr_idx){
    return curr_idx == 7;
});
console.log(val);

class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        console.log("omi");
    }


    examplefunc() {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        arr.find(function() {
            this.test();
        }, this);
    }

    examplefunc2() {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        arr.find(() => {
            this.test();
        });
    }
}


let student = new Student("shakib", 30);
student.examplefunc();
student.examplefunc2();