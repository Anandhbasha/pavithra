abstract class Banking{
   abstract rateofIntrest():void;
}
class SBI extends Banking{
    rateofIntrest(): void {
        console.log("Rate of intrest in SBI 7.8%");
        
    }
}
class Canara extends Banking{
    rateofIntrest(): void {
        console.log("Rate of intrest in SBI 6.8%");
        
    }
}

let Sb = new SBI();
Sb.rateofIntrest();