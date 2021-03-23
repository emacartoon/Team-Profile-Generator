class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer