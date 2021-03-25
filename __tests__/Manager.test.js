const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    test("Can initialize an Manager object", () => {
      const e = new Manager();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Tucker";
      const e = new Manager(name, "Manager", 99, "tbeauchamp@gmail.com", 123);
      expect(e.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Manager";
      const e = new Manager("Tucker", role, 99, "tbeauchamp@gmail.com", 123);
      expect(e.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 99;
      const e = new Manager("Tucker", "Manager", id, "tbeauchamp@gmail.com", 123);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "tbeauchamp@gmail.com";
      const e = new Manager("Tucker", "Manager", 99, email, 123);
      expect(e.email).toBe(email);
    });
    test("Can set roomNumber attribute with constructor", () => {
      const roomNumber = 123;
      const e = new Manager("Tucker", "Manager", 99, "tbeauchamp@gmail.com", roomNumber);
      expect(e.roomNumber).toBe(roomNumber);
    });
  });


  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Tucker";
      const e = new Manager(name, "Manager", 99, "tbeauchamp@gmail.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get role via getRole() method", () => {
      const e = new Manager("Tucker", role, 99, "tbeauchamp@gmail.com", 123);
      expect(e.getRole()).toBe("Manager");
    });
    test("Can get id via getId() method", () => {
      const id = 99;
      const e = new Manager("Tucker", "Manager", id, "tbeauchamp@gmail.com", 123);
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "tbeauchamp@gmail.com";
      const e = new Manager("Tucker", "Manager", 99, email, 123);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get roomNumber via getRoomNumber() method", () => {
      const e = new Manager("Tucker", "Manager", 99, "tbeauchamp@gmail.com", roomNumber);
      expect(e.getRoomNumber()).toBe(roomNumber);
    });
  });
});
