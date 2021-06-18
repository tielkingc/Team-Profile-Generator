const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("Gets the name of the interns' school", () => {
    const intern = new Intern('Dave', 10, 'tielking5@gmail.com', 'Butler');

    expect(intern.getSchool()).toBe('Butler');
})

test("Get's employee role", () => {
    const intern = new Intern('Dave', 10, 'tielking5@gmail.com', 'Butler');

    expect(intern.getRole()).toBe('Intern');
})