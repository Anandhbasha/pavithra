class Payment{
    pay(amount:number):void{
        console.log("Amount Preocessing Payment");
        
    }
}
class Gpay extends Payment{
    pay(amount:number):void{
        console.log("Amount Paid using Gpay",amount);
        
    }
}
class PhonePe extends Payment{
    pay(amount:number):void{
        console.log("Amount Paid using PhonePe",amount);
        
    }
}
class payTm extends Payment{
    pay(amount:number):void{
        console.log("Amount Paid using payTm",amount);
        
    }
}

let gp = new Gpay();
let pp = new PhonePe();
let py = new payTm();

gp.pay(500);
pp.pay(200);
py.pay(200);