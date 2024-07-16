#!/usr/bin/env node

import inquirer from "inquirer";

class Student{
    name: string
    constructor(n:string){
    this.name=n
    }

}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons =new Person()


const programStart = async (persons: Person)=>{
    do{
    console.log("welcome!");
    const ans = await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"whom would you like to interact with",
            choices:[
                { name: "staff", value: "staff" },
                { name: "student", value: "student" },
                { name: "exit", value: "exit" }
            ]
        }
    ])
    if(ans.select=="staff"){
        console.log("you approach the staff room .please feel free to ask any ques");
        
    }
    else if(ans.select=="student"){
        const ans = await inquirer.prompt([
            {
                name:"student",
                type:"input",
                message:"enter the student name you want to engage with"
            }
        ])
        const student= persons.students.find(val => val.name == ans.student)
        if(!student){
            const name= new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello i  am ${name.name}, nice to meet you`);
            console.log("new student added");
            console.log("current student list");
            console.log(persons.students);
            
        }else{
            console.log(`hello i am ${student.name}, nice to see you again`);
            console.log("existing student list");
            console.log(persons.students);
            
            
        }
    
    }else if (ans.select=="exit"){
        console.log("exiting the program");
        process.exit()
        
    }
}while(true)
}
programStart(persons)