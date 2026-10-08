// class Object(instance)

// access specifiers
// private
class Studentmark{
    protected totalMarks : number = 482;
    showMarks():void {
        console.log(this.totalMarks);        
    }
}
class Staff extends Studentmark{
    editMarks(newTotal:number):void{
        this.totalMarks = newTotal;
        console.log(this.totalMarks);
        
    }
}

// let s1 = new Studentmark();
// s1.showMarks();
let st = new Staff();
st.editMarks(497)