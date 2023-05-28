const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "rajkdh";
    const employeeInstance = new Engineer("Raj", 2, "sample@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "rajkh";
    const employeeInstance = new Engineer("Raj", 2, "sample@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Raj", 2, "sample@gmail.com", "JamesLJenks");
    expect(employeeInstance.getRole()).toBe(returnValue);
});