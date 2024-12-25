function EmployeeInfo(name, Saraly) 
{

    console.log("Welcome " + name + "Your monthly salary is " + Saraly)

}

console.log("This is my first programme")

var EmpName = "John"
var EmpSalary = 5000

EmployeeInfo(EmpName, EmpSalary)


const EmpSkills= (skills)=> {
    console.log("Expert in "+ skills)
   }
   EmpSkills("Databases")


const student = require('./StudentInfo')
const  person = require('./Person')

console.log("Student Name:" + student.getName())
console.log("Students campus:" + student.Location())
console.log(student.dob())

console.log(student.StudentGrade())
console.log("Grade is: " + student.StudentGrade(55))

person1= new person("Jim",24,"myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")

