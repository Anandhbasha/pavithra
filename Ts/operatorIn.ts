type User = {
    name:string,
    age:number,
    permission:string[]
}
type employees = {
    name:string,
    order:number
}

function showUser(user:User |employees){
    if("permission" in user){
        console.log(user.permission);        
    }
    else{
        console.log(user.order);
        
    }
}

showUser(
    {
        name:"ajay",
        age:20,
        permission:["Python","Java"]
    }
);


showUser({
    name:"Bala",
    order:2
})


type Stus = {
    name:string,marks:number
}

type Trainer = {
    name:string,salary:number
}
function isStus(person:Stus|Trainer):person is Stus {
    return "marks" in person
}

function display(person : Stus | Trainer){
    if(isStus(person)){
        console.log(person.marks);        
    }else{
        console.log(person.salary);
        
    }
}

display({name:"aravindh",marks:90})
display({name:"anandh",salary:55000})