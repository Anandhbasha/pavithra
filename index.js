// console.log(a);
// let a = 10;
// console.log(a);


// {
//     let x =20
// }

// console.log(x);



// increment
// let a =10
// // a++ //a=a+1
// console.log(a++);

// decrement


// ternary operator

// if(condition any operator)

// switch(expression)

// function
    // withparameter
    // withoutperameter
    // return

// function sum(){
//     console.log(10+30);    
// }   

// sum()
// function add(){
//     return 10+20
// }

// console.log(add());



// arrow
// // function add(){}
// const add = ()=> console.log("Hello");
// add()
// // IIFI
// const greet = (function(){

// })
// // ananoums
// const ana = function(){

// }


// setTimeout(function(){

// })


// reduce
// let arr = [10,20,30,40,50]
// 150
// 10+20 =30
// 30+30 =60
// 60+40 = 100
// 100+50 = 150

// const total = arr.reduce((a,b)=>a*b)
// console.log(total);

// 0+10->10
// 10+20->30


// Object destructure
// const person =  {
//     userName:"Arun",
//     age:20,
//     city:"CBE",
//     courseName:"React"
// }

// const{userName,courseName} = person
// console.log(userName);
// console.log(courseName);

// console.log(`The Student name is:${userName} and he is learning:${courseName}`);


// const fetchData = async()=>{
//     try {
//         const res = await fetch("https://fakestoreapi.com/products")
//         if(!res){
//             throw Error("Unable to get API")
//         }
//         else{

//             const products = await res.json()
//             products.map((item)=>{
//                 // console.log(`product Name is:${item.title} \nPrice Amount is${item.price}`);
//                 console.log(Object.entries(item))
                
//             })
//         }
//     } catch (error) {
        
//     }
// }
// fetchData()

// Object Methods
// regex ->regular expression

const pass = "Hello123"
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$#!%?&]).{8,}$/

if(regex.test(pass)){
    console.log("Strong Password");
    
}
else{
    console.log("Weak Password");
    
}
