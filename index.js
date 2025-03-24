// Your code here
// Import helper functions
const {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll
} = require('./helpers'); // Ensure helpers.js is in the same directory

// Example usage
const employeesData = [
    ["Alice", "Johnson", "Engineer", 40],
    ["Bob", "Smith", "Designer", 35]
];

const employees = createEmployeeRecords(employeesData);

console.log(employees); // Check if employees are created properly
