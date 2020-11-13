const Employees = [
    {name:'Sam', age:62},
    {name:'Marcia', age:58},
    {name:'Abel', age:34},
    {name:'Jane', age:47},
    {name:'Simon', age:71},
    {name:'Mike', age:69},
];

function CheckIfEmployeeIsEqualOlderThan60(EmployeeAge)
{
    return EmployeeAge >= 60;
 }
var EmployeesThatMustRetire = []

let RetirementPolicy = new Promise(function (resolve, reject) {

    Employees.forEach(emp => {
        if (CheckIfEmployeeIsEqualOlderThan60(emp.age)) {
            EmployeesThatMustRetire.push(emp)
        } 
    });
    if(EmployeesThatMustRetire == undefined || EmployeesThatMustRetire === null || EmployeesThatMustRetire.length == 0)
    {
        reject("No employees retiring")
    }
     resolve(EmployeesThatMustRetire);

});

RetirementPolicy.then(function (result) {//then will return value that is true
    console.log(result);//can be done with conditional method but this will be covered in more detail later.
}).catch(function (result) {//catch will run and return value that false
    console.log(result);
})