const Manager = require("../lib/Manager");
describe("Manager", () => {
  describe("Initialization", () => {
    test("Can initialize an Manager object", () => {
      const e = new Manager();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Clark";
      const e = new Manager(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Manager("Nick", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "tbeauchamp@2u.com";
      const e = new Manager("Nick", 77, email);
      expect(e.email).toBe(email);
    });
    test("Can set officeNum attribute with constructor", () => {
      const officeNum = 133;
      const e = new Manager("Nick", 77, "tbeauchamp@gmail.com", officeNum);
      expect(e.officeNum).toBe(officeNum);
    });
  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Nick";
      const e = new Manager(name, 77, "tbeauchamp@gmail.com", 133);
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 77;
      const e = new Manager("Nick", id, "tbeauchamp@gmail.com", 133);
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "tbeauchamp@gmail.com";
      const e = new Manager("Nick", 77, email, 133);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get officeNum via getOfficeNum() method", () => {
      const e = new Manager("Nick", 77, "tbeauchamp@gmail.com", officeNum);
      expect(e.getOfficeNum()).toBe(officeNum);
    });
    test("Can get role via getRole() method", () => {
      const e = new Manager("Nick", 77, "tbeauchamp@gmail.com", 133);
      expect(e.getRole()).toBe("Manager");
    });
  });
});
