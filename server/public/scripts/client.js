/* jshint esversion: 6*/

console.log('js');
let salaries = [];
let employeeArray = [];
let totalMonthlySalary;
class Employee {
    constructor(fName, lName, id, title, annualSalary) {
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

$(document).ready(readyNow); { }

function readyNow() {
    console.log("JQ");
    $('#submit').on('click', addEmployee);
    $('#employeeTable').on('click', '#delete', removeEmployee);
}

function addEmployee() {
    console.log('adding employee');
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let id = $('#idNumber').val();
    let title = $('#jobTitle').val();
    let annualSalary = $('#salary').val();
    salaries.push(parseInt(annualSalary));
    //console.log(salaries);
    let tableRow = ('<tr><td>' + fName + '</td><td>' + lName + '</td><td>' +
        id + '</td><td>' + title + '</td><td>' + annualSalary +
        '</td><td>' + '<button id="delete">Delete</button>' + '</td></tr>');
    $('#employeeTable').append(tableRow);
    $('.input').val('');
    totalSalaries(salaries);
    addToArray(fName, lName, id, title, annualSalary);
}

function addToArray(fName, lName, id, title, annualSalary) {
    let addedEmployee = new Employee(fName, lName, id, title, annualSalary);
    console.log(addedEmployee);
    employeeArray.push($(addedEmployee));
}

function removeEmployee() {
    console.log('in remove employee');
    $(this).parent().parent().remove();
}

function totalSalaries(salaryArray) {
    let payment = 0;
    for (let i = 0; i < salaryArray.length; i++) {
        payment += salaryArray[i];
    }
    let monthlyPayment = payment / 12; {
        console.log(monthlyPayment);
        $('#totalMoney').text('Total Monthly Payment: $' + monthlyPayment.toFixed(2));
    }
    if (monthlyPayment > 20000) {
        $('#total').css('background-color', 'red ');
    }
}