const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("gets manager's office number", () => {
    const manager = new Manager('Dave', 10, 'tielking5@gmail.com', 5);

    expect(manager.getOfficeNumber()).toBe(5);
})

test("gets employee role", () => {
    const manager = new Manager('Dave', 10, 'tielking5@gmail.com', 5);

    expect(manager.getRole()).toBe('Manager');
})