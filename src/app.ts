// // INTERFACE
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string):void,
//     spend(a:number):number
// }
// const me: IsPerson = {
//     name : "Capable",
//     age: 43,
//     speak(text: string):void{
//         console.log(text)
//     },
//     spend(money: number):number{
//         return money
//     }
// }

// let greetsomeone = (person: IsPerson) =>{
//     console.log("hello",person.name)
// }
// greetsomeone(me)
// console.log(me)

import {Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import {Payment} from './classes/payment.js'
import {HasFormatter} from './interfaces/HasFormatter'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Capable",'web', 3000)
// docTwo = new Invoice("Hamed",'Api', 45000)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)

// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

// Ipassing the invoice data
const invOne =  new Invoice('Capable', "Work for website", 10000)
const invTwo =  new Invoice('Adedolapo', "Work for API", 3000)

let invoices: Invoice[] = []

invoices.push(invOne, invTwo)
invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format())
})



// Input
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
// List Tesplate Instinct
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // using Tupple to display and declare the invoices
let values: [string,string, number]
 values = [toFrom.value, details.value, amount.valueAsNumber]

let doc : HasFormatter
if (type.value === 'invoice'){
    doc = new Invoice(...values)
}else{
    doc = new Payment(...values)

}

    list.render(doc,type.value,'end')


})


// Generics
// const addUID = <T>(obj: T) => {
    // or like this
const addUID = <T extends {name: string}>(obj: T) => {

    let uid = Math.floor(Math.random() * 100)
    return { ...obj,uid}
}
let docOne = addUID({name: 'Capable',age: 32})
console.log(docOne.age)

//  gererics with interfaces
// Example 1
// interface Resource <T> {
// uid:number;
// resourceName: string
// data: "???"
// }


// Exaple 2
// interface Resource  {
//     uid:number;
//     resourceName: string
//     data: object
//     }
//     const docThree: Resource<object> ={
//         uid:1,
//         resourceName: 'Capable',
//         data: {name:'ADE'} // Only Objet data can be passed here
//     }

    // Exaple 3
// interface Resource <T> {
//     uid:number;
//     resourceName: string
//     data: T
//     }
//     const docThree: Resource<string>={
//         uid:1,
//         resourceName: 'Capable',
//         data: "ANY TYPE OF DATA CAN BE HERE"
//     }
//     // Othe example on string aray for generics types
//     const docFour:Resource<string[]> ={
//         uid: 4,
//         resourceName: 'ade',
//         data: ['olamilekan','AMADI','NONSO']
//     }
//     console.log(docFour.data)

// ENUM EXAMPLE
// enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
//     // Exaple 3
//     interface Resource <T> {
//         uid:number;
//         resourceName: string
//         resourceType: number
//         data: T
//         }
//         const docThree: Resource<string>={
//             uid:1,
//             resourceName: 'Capable',
//             resourceType: ResourceType.BOOK,
//             data: "ANY TYPE OF DATA CAN BE HERE"
//         }
//         // Othe example on string aray for generics types
//         const docFour:Resource<object> ={
//             uid: 4,
//             resourceName: 'ade',
//             resourceType: ResourceType.AUTHOR,
//             data: ['olamilekan','AMADI','NONSO']
//         }
//         console.log(docFour.resourceType)
// ====================`
// TUPLE  EXAMPLE
// ===================
// TUPPLE ARRAY THAT CAN BE CHAGED OR REAINITIALIZED
let arr = ['cap',33,44,33, true]
arr[0] = false
arr[3] = 'ameed'

// TUPPLE ARRAY THAT CAN NOT BE CHAGED OR REAINITIALIZED
// AFTER DEFINING, IT CANT BE CHANED
let tup : [string, string, number, boolean] = ['capa','dddd',22,true]
tup[2]= 222
tup[3]= true

let stud: [string,number]

stud = ['ade',23222]
