import {} from '../interfaces/HasFormatter.js'
export class Invoice {
    // client: string
    // details: string
    // amount: number

    // constructor(c: string, d: string, a:number) {
    //     this.client = c;
    //     this.details = d
    //     this.amount = a
    // }
    constructor(
         public client : String,
        private details : string,
        readonly amount : number){
    }

    format(){
        return(`${this.client} owes #${this.amount} for ${this.details}`)
    }
}