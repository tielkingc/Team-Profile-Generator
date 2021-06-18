const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('create a new employee', () => {
    const employee = new Employee('Dave', 10, 'tielking5@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee's name", () => {
    const employee = new Employee('Dave', 10, 'tielking5@gmail.com');

    expect(employee.getName()).toBe('Dave');
})

test("gets emplpyee's id number", () => {
    const employee = new Employee('Dave', 10, 'tielking5@gmail.com');

    expect(employee.getID()).toBe(10);
})

test("gets employee's email address", () => {
    const employee = new Employee('Dave', 10, 'tielking5@gmail.com');

    expect(employee.getEmail()).toBe('tielking5@gmail.com');
})

test("returns 'employee'", () => {
    const employee = new Employee('Dave', 10, 'tielking5@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})