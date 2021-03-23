const { TestScheduler } = require("@jest/core");
const Employee = require("../lib/Employee");

describe("Employee", ( => {
    describe("Initialization", () => {
        test("Can initialize an employee object", () => {
            const e = new Employee();
        })
    })
}))