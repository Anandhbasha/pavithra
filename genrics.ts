function display <T> (value:T){
    return value
}

console.log(display<number>(10000));
console.log(display<string>("Hello"));


class Product <T>{
    constructor(public value:T){}
    getValue():T{
        return this.value;
    }
}

let p1 = new Product<number>(150);