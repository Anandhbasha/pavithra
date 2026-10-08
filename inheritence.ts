class College{
    institutionName:string = "";
    show(institutionName : string):void{
        this.institutionName = institutionName;
        console.log(this.institutionName);
        
    }
}

class Student extends College{

}

let s1 = new Student();
s1.show("abc college");
let s2 = new Student();
s2.show("xyz");


// single inheritence -> one parent one child
// mutiple -> one multiple parent
// multilevel ->Grandpa -> Parent -> son -> grand child
// Hirachecial -> Grandpa->dad ,uncle,aunt
// Hybrid