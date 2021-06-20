const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// module.exports = Intern;


function adde () {
    const employees = []
    for (var i = 0; i < 3; i++) {
        const employee = new Intern('Dave', i, `dave${i}@gmail.com`);
        employees.push(employee);
        return employees;
    }
}
console.log(adde());