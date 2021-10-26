
// let myname: Function;
// myname = (a: string, b: number, c: number) => {
//     if (a && b != null) console.log(a + b)
//    return (c)
// }

// myname(22,22,22)
// let greet: Function

// greet = (a:number, b: number) => {
//     return (a+ b)
// }
// let sns = greet(3,5)
// console.log(sns)
type strOrNum =  string | number
const logDetails = (uid: strOrNum, item:strOrNum) =>{
    console.log(`${item} has a uid of ${uid}`)
}
// logDetails(Math.random(),"Adedolapo capable")

type objWithName = {name:string , uid: strOrNum }
const greet = (user: objWithName) =>{
    console.log(`${user.name} has a uid of ${user.uid}`)
}

greet({
    name: "Adedolapo",
    uid: Math.random()
})

// Sinature function
let greeting : Function;

greeting = (name:string, greeting: string) => {
 console.log(`${name} says ${greeting}`)
}
// greeting('Olawale', "You are welcome")

// strict declarations on functions
let calc: (a: number, b:number, c:string)=> number;
calc = (a: number, b: number, c:string) => {
    if (c === 'add') return (a + b)
    return (a-b)
   }
let respons = calc(3,4,'add')  
console.log(respons) 

// Object TYPES
let log: (obj:{name:string, age:number}) => void;
type person = {name:string,age:number}
log = (capable:person) => {
console.log(`${capable.name} age is ${capable.age} years old`)
}

log({
    name: "OLAWALE",
    age : 31
})