const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("gets engineer's github", () => {
    const engineer = new Engineer('Dave', 10, 'tielking5@gamil.com', 'tielkingc');

    expect(engineer.getGithub()).toBe('tielkingc');
})

test("gets employee role", () => {
    const engineer = new Engineer('Dave', 10, 'tielking5@gmail.com', 'tielkingc');

    expect(engineer.getRole()).toBe('Engineer');
})