"use strict";
// function getStudent():Promise<string>{
//     return new Promise((resolved)=>{
//         setTimeout(()=>{
//             resolved("Pavithra");            
//         },2000)
//     })
// }
// getStudent().then((res:string)=>{console.log(res)})
// function checkBalance(
//     balance:number,
//     amount:number,
// ):Promise<string>{
//     return new Promise((resolved,reject)=>{
//         if(balance>=amount){
//             resolved("Withdrawl sucessfully")
//         }
//         else{
//             reject("insufficient Balance")
//         }
//     })
// }
// checkBalance(2000,3000).then((res:string)=>{
//     console.log(res);
// }).catch((err:Error)=>console.log(err))
// function fetchProduct():Promise<string>{
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             resolved("Mobile Loaded")
//         },3000)
//     })
// }
// const displayProduct = async():Promise<void>=>{
//     console.log("Loading.....");  
//     let prod = await fetchProduct()
//     console.log(prod);
// }
// displayProduct()
async function login(userName, password) {
    if (userName === "admin" && password === "1234") {
        return "Login Succesfull";
    }
    else {
        throw new Error("invalid Credentials");
    }
}
async function verify() {
    try {
        let res = await login("admi", "1234");
        console.log(res);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}
verify();
let btn = document.getElementById("btn");
let productNew = document.getElementById("prod");
const getproduct = async () => {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
            throw new Error("Unable to connect the API");
        }
        else {
            let products = await res.json();
            if (productNew) {
                productNew.innerHTML = " ";
            }
            products.forEach((item) => {
                if (productNew) {
                    productNew.innerHTML += `
                    <div>
                       <h2>${item.id}</h2>;
                       <h2>${item.title}</h2>;
                       <h2>${item.price}</h2>;
                       <p>${item.description}</p>;
                       <p>${item.category}</p>;
                    </div>`;
                }
            });
        }
    }
    catch (error) {
        console.log(error);
        if (productNew) {
            productNew.textContent += "Unable to load Products";
        }
    }
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", getproduct);
