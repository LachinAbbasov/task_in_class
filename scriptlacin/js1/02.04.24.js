
// Human function constructor yaradin - (name, surname, age, isMale - default true) olmalidir
// Human function constructor-da getFullName() methods olmalidir ve result olaraq: meselen John Doe-dirse, D.JOHN return etmelidir.

// const person1 = new  Human("John", "Doe", 30);
// function Human(name, surname, age, isMale ) {
//     if (typeof isMale === "undefined") {
//         isMale = true;
//     }

//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.getFullName = function() {
//         const shortname = this.isMale ? "D." : "";
//         return shortname + this.name.toUpperCase() + " " + this.surname.toUpperCase();
//     };
// }
// console.log(person1.getFullName()); 


// Employee function constructor yaradin - (department, experienceYear, salary - default sifir) olmalidir.
// Employee function constructor-da generateID method-u olmalidir ve department-in ilk 2 herfi boyuk simvollarla + Math.random istifade edib 4 reqemli eded, 'PO2353'
// sheklinde olmalidir.
// const employeeI=new Employee("Lacin",4)
// function Employee(department, experienceYear, salary){
//     if(typeof salary ==="undifined"){
//         salary= 0;
//     }
// this.department= department;
// this.experienceYear=experienceYear;
// this.salary= salary;
// this.generateID=function(){
//  const departmentCode = department.slice(0, 2).toUpperCase();
//  const randomID = Math.floor(1000 + Math.random() * 9000);
//  return departmentCode + randomID;
// }
// }
// console.log(employeeI.generateID());

// Object SetPrototypeOf-dan istifade edib, 5-6 ferqli employee yaradin ve bir array-e yigin.

// function Employee(department, experienceYear, salary) {
//     if(typeof salary ==="undifined"){
//                 salary= 0;
//             }
//     this.department = department;
//     this.experienceYear = experienceYear;
//     this.salary = salary;
// }
// Employee.prototype.generateID = function() {
//     const departmentCode = this.department.slice(0, 2).toUpperCase();
//     const randomID = Math.floor(1000 + Math.random() * 9000);
//     return departmentCode + randomID;
// };

// const employees = [];

// const employee1 = new Employee("Lacin", 5);
// Object.setPrototypeOf(employee1, Employee.prototype);
// employees.push(employee1);

// const employee2 = new Employee("Ilkin", 3, 50000);
// Object.setPrototypeOf(employee2, Employee.prototype);
// employees.push(employee2);

// const employee3 = new Employee("Ramal", 7, 60000);
// Object.setPrototypeOf(employee3, Employee.prototype);
// employees.push(employee3);

// const employee4 = new Employee("Leman", 4, 45000);
// Object.setPrototypeOf(employee4, Employee.prototype);
// employees.push(employee4);

// const employee5 = new Employee("Fidan", 2, 40000);
// Object.setPrototypeOf(employee5, Employee.prototype);
// employees.push(employee5);

// console.log(employees);


// bir globalFunction yaradin: searchEmployee() -> parametr olaraq bir array qebul edir ve yeni bir array return edir
// bu function-da daxil olunan array-den experienceYear 5-den cox olan,yashi 20-35 araliginda olan
// department-i IT ve ya Design olan ishcileri tapmali ve yeni array-e
// yigmalisiniz. Yeni array-de element-ler object sheklinde olmalidir ve {fullName: D.JOHN,salary:2000,department:'IT',age:45,id:IT2842} bu formada
// olmalidir.

function searchFunction(employesArray){
    const filterEmployee=[]
    employeesArray.forEach(function(employee) {
        if (employee.experienceYear > 5 && employee.experienceYear <= 35 &&
            employee.age >= 20 && employee.age <= 35) 
            {
            const newEmployee = {
                fullName: employee.fullName,
                department: employee.department,
                salary: employee.salary,
                age: employee.age,
                id: employee.generateID()
            };
            filteredEmployees.push(newEmployee);
        }
    });
    return filteredEmployees;
};

const employees = [
    new Employee("Lacin", 5),
    new Employee("Ilkin", 3, 50000),
    new Employee("Ramal", 7, 60000),
    new Employee("Leman", 4, 45000),
    new Employee("Fidan", 2, 40000)
];

const result = searchEmployee(employees);
console.log(result);

    








