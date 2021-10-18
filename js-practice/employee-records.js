//make fulltime the default

employees = []
function Employee(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.print = function(){
        console.log(this)
    }
    }    

var bill = new Employee ("Bill", "Program Manager", "$90k", "contract")
var emily = new Employee("Emily", "CEO", "$1.6M", "full time")
var john = new Employee("John", "Warehouse Operator", "$15/hr", "Part-Time" )

bill.print()
emily.print()
john.print()

// Employee.prototype.print = function(){
//     console.log(this.Employee)
// }