const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Nick";
      const e = new Employee(name, "Employee", 77, "meerkat@nick.com");
      expect(e.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Employee";
      const e = new Employee("Nick", role, 77, "meerkat@nick.com");
      expect(e.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Employee("Nick", "Employee", id, "meerkat@nick.com");
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "meerkat@nick.com";
      const e = new Employee("Nick", "Employee", 77, email);
      expect(e.email).toBe(email);
    });
  });

  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Nick";
      const e = new Employee(name, "Employee", 77, "meerkat@nick.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get role via getRole() method", () => {
      const e = new Employee("Nick", role, 77, "meerkat@nick.com");
      expect(e.getRole()).toBe("Employee");
    });
    test("Can get id via getId() method", () => {
      const id = 77;
      const e = new Employee("Nick", "Employee", id, "meerkat@nick.com");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "meerkat@nick.com";
      const e = new Employee("Nick", "Employee", 77, email);
      expect(e.getEmail()).toBe(email);
    });
  });
});
