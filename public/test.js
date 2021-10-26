"use strict";
// let myname: Function;
// myname = (a: string, b: number, c: number) => {
//     if (a && b != null) console.log(a + b)
//    return (c)
// }
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
greet({
    name: "Adedolapo",
    uid: Math.random()
});
// Sinature function
let greeting;
greeting = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// greeting('Olawale', "You are welcome")
// strict declarations on functions
let calc;
calc = (a, b, c) => {
    if (c === 'add')
        return (a + b);
    return (a - b);
};
let respons = calc(3, 4, 'add');
console.log(respons);
// Object TYPES
let log;
log = (capable) => {
    console.log(`${capable.name} age is ${capable.age} years old`);
};
log({
    name: "OLAWALE",
    age: 31
});
