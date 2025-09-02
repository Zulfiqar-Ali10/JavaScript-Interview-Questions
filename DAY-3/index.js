
/// Day 3  ////////////////////////////

// function Person(fname, lname, contact ) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;

//     this.getName = function () {
//         console.log(this.fname, this.lname);
//     };
// }

// const Person1 = new Person("Zulfiqar", "Ali", "793125");
// const Person2 = new Person("Muhammad", "Owais", "793126");
// console.log(Person1);
// console.log(Person2.getName());

/// Day 3  ////////////////////////////

// After ES6 new method Class constructor Blue Print thats replace the function class/constructor method:


class Person {
    constructor(fname, lname, contact) {
       this.fname = fname;
       this.lname = lname;
       this.contact = contact;
    }
    getContact(){
        console.log(this.contact);
    }
    getName() {
        console.log(this.fname, this.lname);
    }
}

const Person1 = new Person("Zulfiqar", "Ali", "793125");
const Person2 = new Person("Muhammad", "Owais", "793126");
console.log(Person1);
console.log(Person2.getName());
console.log(Person2.getContact());

/// Day 3  ////////////////////////////