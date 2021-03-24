const generateEngineer = require("./Employee.js");

class Engineer {
    constructor(name, role, id, email, github, dep){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github;
        this.dep = dep;
    }
    getName(){
        return this.name;
    }
    getRole(){
        return this.role;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getDep(){
        return `Github: <a href="http://www.github.com/${this.github}">${this.github}</a>`;
    }
}

module.exports = Engineer