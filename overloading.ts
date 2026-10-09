class ProductSearch{
    search(productId:number):void;
    search(productName:string):void;
    search(value:number | string) :void{
        if(typeof value === "number"){
            console.log("searching Product ID",value);
            
        }else{
            console.log("Searching product Name:",value);
            
        }
    }
}

let prod = new ProductSearch();
prod.search(101);
prod.search("Mobile");

