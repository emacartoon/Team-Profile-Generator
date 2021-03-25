const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    test("Can initialize an Intern object", () => {
      const e = new Intern();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Dan";
      const e = new Intern(name, "Intern", 66, "dan@isawesome.com", "University of Arizona");
      expect(e.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Intern";
      const e = new Intern("Dan", role, 66, "dan@isawesome.com", "University of Arizona");
      expect(e.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 66;
      const e = new Intern("Dan", "Intern", id, "dan@isawesome.com", "University of Arizona");
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "dan@isawesome.com";
      const e = new Intern("Dan", "Intern", 66, email, "University of Arizona");
      expect(e.email).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
      const school = "University of Arizona";
      const e = new Intern("Dan", "Intern", 66, "dan@isawesome.com", school);
      expect(e.school).toBe(school);
    });
  });


  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Dan";
      const e = new Intern(name, "Intern", 66, "dan@isawesome.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get role via getRole() method", () => {
      const e = new Intern("Dan", role, 66, "dan@isawesome.com", "University of Arizona");
      expect(e.getRole()).toBe("Intern");
    });
    test("Can get id via getId() method", () => {
      const id = 66;
      const e = new Intern("Dan", "Intern", id, "dan@isawesome.com", "University of Arizona");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "dan@isawesome.com";
      const e = new Intern("Dan", "Intern", 66, email, "University of Arizona");
      expect(e.getEmail()).toBe(email);
    });
    test("Can get school via getSchool() method", () => {
      const e = new Intern("Dan", "Intern", 66, "dan@isawesome.com", school);
      expect(e.getSchool()).toBe(school);
    });
  });
});
