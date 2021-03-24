class Intern {
    constructor(name, role, id, email, school, dep){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.school = school
        this.dep = dep;
    }
    getName(){
        return this.name;
    }
    getRole(){
        return "Intern";
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getDep(){
        return `School: ${this.school}`;
    }
}

module.exports = Intern