class Manager {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager