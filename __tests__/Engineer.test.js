const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    test("Can initialize an Engineer object", () => {
      const e = new Engineer();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Clark";
      const e = new Engineer(name, "Engineer", 88, "thewizard@ct.com", "Boogie");
      expect(e.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Engineer";
      const e = new Engineer("Clark", role, 88, "thewizard@ct.com", "Boogie");
      expect(e.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 88;
      const e = new Engineer("Clark", "Engineer", id, "thewizard@ct.com", "Boogie");
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "thewizard@ct.com";
      const e = new Engineer("Clark", "Engineer", 88, email, "Boogie");
      expect(e.email).toBe(email);
    });
    test("Can set Github attribute with constructor", () => {
      const github = "Boogie";
      const e = new Engineer("Clark", "Engineer", 88, "thewizard@ct.com", github);
      expect(e.github).toBe(github);
    });
  });


  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Clark";
      const e = new Engineer(name, "Engineer", 88, "thewizard@ct.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get role via getRole() method", () => {
      const e = new Engineer("Clark", role, 88, "thewizard@ct.com", "Boogie");
      expect(e.getRole()).toBe("Engineer");
    });
    test("Can get id via getId() method", () => {
      const id = 88;
      const e = new Engineer("Clark", "Engineer", id, "thewizard@ct.com", "Boogie");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "thewizard@ct.com";
      const e = new Engineer("Clark", "Engineer", 88, email, "Boogie");
      expect(e.getEmail()).toBe(email);
    });
    test("Can get Github via getGithub() method", () => {
      const e = new Engineer("Clark", "Engineer", 88, "thewizard@ct.com", github);
      expect(e.getGithub()).toBe(github);
    });
  });
});
