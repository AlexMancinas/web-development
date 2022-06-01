//Primitives: numbers. string, boolean
//More complex types: arrays, objects 
//Function types, parameters

//Primitives 

let age: number;

age = 12;

let userName: string = "Carolina";

let isInstructor: boolean;

isInstructor = true;

let hobbes: null;


//More complex types 

let hobbies: string[];     

hobbies = ['sports','cooking' ];

type Person = {
    name: string;
    age: number;
}

let person: Person

person = {
    name: 'Alex',
    age: 32,

}

let people: Person[];


//Type inference

let course: string | number= 'React - the complete guide';
course = 1234;

//Functions & types
function add(a: number,b: number){
    return a + b
}

function print(value: any){
    console.log(value)
}

//Generics

 function insertAtBeginning<T>( array: T[], value: T){
     const newArray = [value, ...array]
     return newArray
 }

 const demoArray = [1,2,3]

 const updateArray = insertAtBeginning(demoArray, -1 )// [-1, 1, 2, 3]
 const stringArray = insertAtBeginning(['a','b','c'], 'd')

 //Class

 class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
  
    constructor(
      public firstName: string,
      public lastName: string,
      public age: number,
      private courses: string[]
    ) {}
  
    enrol(courseName: string) {
      this.courses.push(courseName);
    }
  
    listCourses() {
      return this.courses.slice();
    }
  }
  
  const student = new Student('Max', 'Schwarz', 32, ['Angular']);
  student.enrol('React');
  // student.listCourses(); => Angular, React
  
  // student.courses => Angular, React
  
  //Interfaces 
  interface Human {
    firstName: string;
    age: number;
  
    greet: () => void;
  }
  
  let max: Human;
  
  max = {
    firstName: 'Max',
    age: 32,
    greet() {
      console.log('Hello!');
    },
  };
  
  class Instructor implements Human {

    constructor(firts: string, age: number) {
        this.firstName = firts;
        this.age = age
    }
    firstName: string;
    age: number;
    greet() {
      console.log('Hello!!!!');
    }
  }