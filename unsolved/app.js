const displayEmployees = function (){
    $('.content').empty();
    clearTopElements();
    document.getElementById('displayElements').style.display = 'inline';
    render();
    
         
}
//
const clearTopElements = function(){
    document.getElementById('addElements').style.display = 'none';
    document.getElementById('verifyElements').style.display = 'none';
    document.getElementById('updateElements').style.display = 'none';
    document.getElementById('deleteElements').style.display='none';
}

const displayAddEmployee = function(){
    $('.content').empty();
    clearTopElements();
    document.getElementById('addElements').style.display = 'inline';
    render();
}

const displayVerifyEmployee = function(){
    $('.content').empty();
    clearTopElements()
    document.getElementById('verifyElements').style.display = 'inline';
    render();
}

const displayUpdateEmployee = function(){
    $('.content').empty();
    clearTopElements()
    document.getElementById('updateElements').style.display = 'inline';
    render();
}

const displayDeleteEmployee = function(){
    $('.content').empty();
    clearTopElements()
    document.getElementById('deleteElements').style.display = 'inline';
    render();
}



const render = function(){
    for (let index = 0; index < employeeList.length; index++) {
        const employee = employeeList[index];
        var employeeName = employee.name + "<br/>";
        var employeeOfficeNum = employee.officeNum + "<br/>";
        var employeePhoneNum = employee.phoneNum + "<br/>";
        var employeeHtml = employeeName + employeeOfficeNum + employeePhoneNum;
        $('.content').append(`<fieldset> ${employeeHtml} </fieldset>`);
        
        console.log(employee);
    }   
}

const addEmployee = function(){
    var employee = {};
    //replace this with the Id of the elements in addElements div
    employee.name = $('#name').val();
    employee.officeNum = $('#officenum').val();
    employee.phoneNum = $('#phonenum').val();
    employeeList.push(employee);
    displayEmployees();
}

const verifyEmployee = function(){
    //read from the input name'
    var handle = $('#verifyname').val();
    var result = employeeList.indexOfObject("name",handle);
    $('.content').empty();
    displayEmployees();
    if(result === -1){
        $('.content').prepend("No");
    }
    else{
        $('.content').prepend("Yes");
    }
}

Array.prototype.indexOfObject = function arrayObjectIndexOf(property, value) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value){
            return i;
        } 
    }
    return -1;
}

const updateEmployee = function(){
    var employee = {};
    //replace this with the Id of the elements in addElements div
    const i = employeeList.findIndex( e => e.name === $('#updateName').val())
    employeeList[i].officeNum = $('#updateOfficenum').val();
    employeeList[i].phoneNum = $('#updatePhonenum').val();
    displayEmployees(); 

}


const deleteEmployee = function(){
    let deletecontact = $("#deleteName").val(); 
    for (let i=0; i < employeeList.length; i++){ 
   
    if(deletecontact === employeeList[i].name){ 

      employeeList.splice(i,1)
    } 

}
displayEmployees();
}

//displayEmployees();
$("#view").on("click", displayEmployees); // I want all employees to display
$("#add").on("click", displayAddEmployee); //add an employee name, push into my array
$("#addEmp").on("click", addEmployee);
$("#verify").on("click", displayVerifyEmployee);//verify if an employee is on the list
$("#verifyEmp").on("click", verifyEmployee);//verify if an employee is on the list
$("#update").on("click", displayUpdateEmployee);
$("#updateEmp").on("click", updateEmployee); //update employee info 
$("#delete").on("click", displayDeleteEmployee);//delete employee name from the array of objects
$("#deleteEmp").on("click", deleteEmployee); //delete an employee from the List