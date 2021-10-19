//make fulltime the default

var employees = []
function Employee(name, title, salary, status = "Full-Time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    this.print = function(){
        console.log(this)
    }
    employees.push(this.name)
    }    

var bill = new Employee ("Bill", "Program Manager", "$90k", "Contract")
var emily = new Employee("Emily", "CEO", "$1.6M")
var john = new Employee("John", "Warehouse Operator", "$15/hr", "Part-Time" )

bill.print()
emily.print()
john.print()
console.log(employees)

// Employee.prototype.print = function(){
//     console.log(this.Employee)
// }