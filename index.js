class student {
    Name;
    Id;
    Subject;
}
class teacher {
    Name;
    Id;
    Subject;
}
class School {
    classteacher;
    classstudent;
    schooltiming;
}
const student1 = new student();
student1.Name = "fariha";
student1.Id = "PIACI487";
student1.Subject = "chemistry";
const student2 = new student();
student2.Name = "sadia";
student2.Id = "PIACI486";
student2.Subject = "physics";
const student3 = new student();
student3.Name = "diana";
student3.Id = "PIACI483";
student3.Subject = "urdu";
const teacher1 = new student();
teacher1.Name = "danield";
teacher1.Id = "PIACI483";
teacher1.Subject = "urdu";
const studentarray = [student1, student2, student3];
const schol = new School();
schol.classstudent = studentarray;
schol.classteacher = teacher1;
schol.schooltiming = "07-01";
console.log(schol);
export {};
