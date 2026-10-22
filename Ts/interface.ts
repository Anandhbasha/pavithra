interface student <T,U>{
    name:string,
    marks:T,
    age:U
}

let student1:student<number,number> = {
    name:"arun",
    marks:20,
    age:20
}

let student2:student<string,number> = {
    name:"arun",
    marks:"A Grade",
    age:25
}


interface HasId{
    id:number;
}

function show <T extends HasId>(data :T):T{
    console.log(data.id);
    return data;
    
}

show({id:105,name:"Balu",age:20})



function getProps < T extends object,k extends keyof T> (obj:T,key:k):T[k]{
    return obj[key];
}

let stu = {
    name:"Pavithra",
    age:20,
    course:"Angular"
}


console.log(getProps(stu,"name"));
console.log(getProps(stu,"age"));
console.log(getProps(stu,"course"));



type person = {
    name:string;
    age:number;
}
type trainer ={
    designation :string,
    duration :string

}

type employee = person & trainer;

let emp :employee = {
    name:"anandh",
    age:33,
    designation :"Angular trainer",
    duration :"1months"
}


class Car{
    Drive(){
        console.log("Car is Driving");        
    }
}
class Bike{
    Ride(){
        console.log("Bike is riding");
        
    }
}

function start(Vehicle :Car | Bike){
    if(Vehicle instanceof Car){
        Vehicle.Drive()
    }
    else{
        Vehicle.Ride()
    }
}


start(new Car())
start(new Bike())


// let userName = prompt("Enter the name")
// console.log(userName);



// import * as readline from "node:readline"

// declare const process: any;

// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// r1.question("Enter your name:",(userName:string)=>{
//     console.log(userName);
//     r1.close()
    
// })


// use
// Operator find a paricular property is not or there
// create custom function return value is Type
// Commom properties use to find object Type ->Descrminated unions
// utility type