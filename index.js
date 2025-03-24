const {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
} = require('./helpers');

const employeesData = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
];

const employees = createEmployeeRecords(employeesData);

console.log("Employees Data:");
console.log(employees);

// Adding Time In and Time Out for all employees
employees.forEach(employee => {
    createTimeInEvent(employee, "2025-03-20 0900");
    createTimeOutEvent(employee, "2025-03-20 1700");
});

console.log("Time In and Time Out Events:");
console.log(employees);

// Checking hours worked by first employee
console.log(`Hours Worked by ${employees[0].firstName} on 2025-03-20:`);
console.log(hoursWorkedOnDate(employees[0], "2025-03-20"));

// Checking wages earned by first employee
console.log(`Wages Earned by ${employees[0].firstName} on 2025-03-20:`);
console.log(wagesEarnedOnDate(employees[0], "2025-03-20"));

// Calculating total payroll
console.log("Total Payroll for All Employees:");
console.log(calculatePayroll(employees));
