// task 1

 function Emploee(id,name,surname,salary,workExperience,isPrivileges,gender){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.workExperience = workExperience; 
        this.isPrivileges = isPrivileges; 
        this.gender = gender;
    }
    const employeeObj = new Emploee(0,'Valeriy','Zhmishenko',1000,10,true,'male');
    console.log(employeeObj)

    // task 2

    Emploee.prototype.getFullName = function(){
        return this.surname + ' ' + this.name;
    }
    console.log(employeeObj.getFullName());