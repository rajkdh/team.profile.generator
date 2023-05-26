const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email) {
        super (name, id, email);
        this.officeNumber = this.officeNumber;
    }

    getOfficeNumber() {

        return this.officeNumber;

    }

    getRole() {

        return "Manager";

    }
    
}

module.exports = Manager;