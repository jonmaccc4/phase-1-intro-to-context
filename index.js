// Your code here

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

//  employee records
const employees = createEmployeeRecords(employeesData);

//    date and shift timing
const workDate = "2025-03-24";
const timeInHour = "0800";
const timeOutHour = "1700";

// time-in and time-out records for all employees
employees.forEach(employee => {
    createTimeInEvent(employee, `${workDate} ${timeInHour}`);
    createTimeOutEvent(employee, `${workDate} ${timeOutHour}`);
});

// Log time-in, time-out, hours worked, and pay for all employees
employees.forEach(employee => {
    const hoursWorked = hoursWorkedOnDate(employee, workDate);
    const wagesEarned = wagesEarnedOnDate(employee, workDate);
    
    console.log(`${employee.firstName} ${employee.familyName}:`);
    console.log("  Time In Events:", employee.timeInEvents);
    console.log("  Time Out Events:", employee.timeOutEvents);
    console.log(`  Hours Worked: ${hoursWorked}`);
    console.log(`  Wages Earned: $${wagesEarned.toFixed(2)}`);
    console.log("--------------------------------");
});

// Calculate total payroll for all employees
const totalPayroll = calculatePayroll(employees);
console.log(`Total Payroll: $${totalPayroll.toFixed(2)}`);
