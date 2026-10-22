// interface product  {
//     prodName:string,
//     prodProce:number,
//     prodDesc:string

// }

// type optionalProduct<T> = {
//     [K in keyof T]?:T[K];
// }

// let newProd:optionalProduct<product> = {
//     prodName:"Laptop"
// }

// console.log(newProd);

interface product  {
    prodName:string,
    prodPrice:number,
    prodDesc:string

}

type stringType<T> = {
    [K in keyof T]:string;
}

let newProd:stringType<product> = {
    prodName:"Laptop",
    prodPrice:"72000",
    prodDesc:"Lorem"
}

console.log(newProd);



// conditional type
type CheckType<T> = T extends string ? "string Type":"Other type"

// let a:CheckType<string> = "string Type";
// let b:CheckType<number> = "Other Type";
