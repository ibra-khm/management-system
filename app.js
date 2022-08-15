function Person (employeeId, fullName, department, level, imageUrl, salary) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salaryMedian(level);
}
function salaryMedian(level){
    switch(level){
        case('Senior'):
        return Math.floor(Math.random() *(2000 - 1500) + 1500)
        break;

        case('Mid-Senior'):
        return Math.floor(Math.random() *(1500 - 1000) + 1000)
        break;

        case('Junior'):
        return Math.floor(Math.random() *(1000 - 500) + 500)
    }
}

let employee00 = new Person (1000, 'Ghazi Samer', 'Administration', 'Senior')
let employee01 = new Person (1001, 'Lana Ali', 'Finance', 'Senior')
let employee02 = new Person (1002, 'Tamara Ayoub', 'Marketing', 'Senior')
let employee03 = new Person (1003, 'Safi Walid', 'Administration', 'Mid-Senior')
let employee04 = new Person (1004, 'Omar Ziad', 'Development', 'Senior')
let employee05 = new Person (1005, 'Rana Saleh', 'Development', 'Junior')
let employee06 = new Person (1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior')

function total(...info){
    for(let x = 0; x < 7; x++)
    console.log("Name: " + info[x].fullName + ". \n"  + "Salary: " + info[x].salary);
    return;
}
total(employee00, employee01, employee02, employee03, employee04, employee05 , employee06)

const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody")


let employees = [employee00, employee01, employee02, employee03, employee04, employee05, employee06];

let tblHeader = ["Employee ID", "full name", "Department", "Level", "Salary"];
function tHeadGenerator() {
    const row = document.createElement("tr");
    
    for (let x = 0; x < 5; x++) {
        const cell = document.createElement("th");
        const cellContent = document.createTextNode(
            tblHeader[x]
            );

        cell.appendChild(cellContent);
        row.appendChild(cell);
    }
        tHead.appendChild(row);
        table.appendChild(tHead);
}

function tBodyGenerator() {
    for (let x = 0; x <= 6; x++) {
        const row = document.createElement("tr");
        
        for (let y = 0; y < 6; y++) {
            const cell = document.createElement("td");
            if (y == 4) {
                continue
            }
            let employee = Object.values(employees[x]);
            const cellContent = document.createTextNode(employee[y]);

            cell.appendChild(cellContent);
            row.appendChild(cell);            
        }
        
        tBody.appendChild(row);
    }
   
    table.appendChild(tBody);
}

function render() {
    tHeadGenerator();
    tBodyGenerator();
    document.getElementById("main").appendChild(table);
}
render();
