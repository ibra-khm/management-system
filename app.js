function employee(employeeId, fullName, department, level, imageUrl, salary) {
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

let form = document.getElementById("form");
let allEmployees = [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let newID = document.getElementById("new-id").value;
    let newName = document.getElementById("new-name").value;
    let department = document.getElementById("dep").value;
    let level = document.getElementById("lvl").value;
    let imageUrl = document.getElementById("image-url").value;
    let newEmployee = new employee(newID, newName, department, level, imageUrl)
    newCard(newEmployee);
    allEmployees.push(newEmployee);
    form.reset();
    localStorage.setItem("employees", JSON.stringify(allEmployees));
});


// function getData(event) {
//     let imageUrl = document.getElementById("image-url");
//     let employeeForm = new employee(id, newName, department, level, imageUrl);
//     localStorage.setItem("employee", JSON.stringify(employeeForm));
//     console.log(employeeForm);
//     newCard(employeeForm);
//     event.preventDefault();
// }

let cardDiv = document.getElementById("card-div");

function newCard(newEmployee) {
    let card = document.createElement("div");
    cardDiv.appendChild(card);

    let img = document.createElement("img");
    img.setAttribute("src", newEmployee.imageUrl)
    card.appendChild(img);

    let cardText = document.createElement("div");
    card.appendChild(cardText);

    let id = document.createElement("h2");
    id.textContent = newEmployee.employeeId
    cardText.appendChild(id);

    let cardP = document.createElement("p");
    cardText.appendChild(cardP);
    cardP.textContent = newEmployee.fullName

    let cardP2 = document.createElement("p");
    cardP2.textContent = newEmployee.department
    cardText.appendChild(cardP2);

    let cardP3 = document.createElement("p");
    cardP3.textContent = newEmployee.level
    cardText.appendChild(cardP3);

    let cardP4 = document.createElement("p");
    cardP4.textContent = newEmployee.salary
    cardText.appendChild(cardP4)
}

// current employees info

let employee00 = new employee (1000, 'Ghazi Samer', 'Administration', 'Senior', 'https://randomuser.me/api/portraits/men/17.jpg')
let employee01 = new employee (1001, 'Lana Ali', 'Finance', 'Senior', 'https://randomuser.me/api/portraits/women/19.jpg')
let employee02 = new employee (1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'https://randomuser.me/api/portraits/women/23.jpg')
let employee03 = new employee (1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'https://randomuser.me/api/portraits/men/29.jpg' )
let employee04 = new employee (1004, 'Omar Ziad', 'Development', 'Senior', 'https://randomuser.me/api/portraits/men/32.jpg')
let employee05 = new employee (1005, 'Rana Saleh', 'Development', 'Junior', 'https://randomuser.me/api/portraits/women/69.jpg')
let employee06 = new employee (1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://randomuser.me/api/portraits/men/31.jpg')


let currentEmployees = [employee00, employee01, employee02, employee03, employee04, employee05, employee06];

for (let i = 0; i < currentEmployees.length; i++) {
    newCard(currentEmployees[i]);
    allEmployees.push(currentEmployees[i]);
    localStorage.setItem("employees", JSON.stringify(allEmployees));
}
function saveToLocal(){
    let strArr = JSON.stringify(newEmployee);
    localStorage.setItem('employees', strArr); 
 }
 
 function getFromLocal(){
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    newEmployee = arr;
    arr.forEach((ele)=>{
     print(ele);
    })};2