import {} from '../interfaces/HasFormatter.js'
export class Payment {
    // client: string
    // details: string
    // amount: number

    // constructor(c: string, d: string, a:number) {
    //     this.client = c;
    //     this.details = d
    //     this.amount = a
    // }
    constructor(
         public recipient : String,
        private details : string,
        readonly amount : number){
    }

    format(){
        return(`${this.recipient} is owed #${this.amount} for ${this.details}`)
    }
}