class student{
    Name?:string;
    Id?:string;
    Subject?:string;

}
class teacher{
    Name?:string;
    Id?:string;
    Subject?:string;
}
class School {
    classteacher?:teacher;
    classstudent?:student[];
    schooltiming?:string;
}
const student1:student=new student();
student1.Name= "fariha";
student1.Id="PIACI487";
student1.Subject="chemistry";
const student2:student=new student();
student2.Name= "sadia";
student2.Id="PIACI486";
student2.Subject="physics";
const student3:student=new student();
student3.Name= "diana";
student3.Id="PIACI483";
student3.Subject="urdu";


const teacher1:teacher=new student();
teacher1.Name= "danield";
teacher1.Id="PIACI483";
teacher1.Subject="urdu";

const studentarray:student[]=[student1,student2,student3]



const schol:School=new School();
schol.classstudent=studentarray;
schol.classteacher=teacher1;
schol.schooltiming="07-01";

console.log(schol);





















