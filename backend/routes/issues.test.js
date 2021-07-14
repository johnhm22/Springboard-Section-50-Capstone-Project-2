process.env.NODE_ENV = "test";
const db = require ("../db.js");
const Issues = require("../models/issues");
const Users = require("../models/users");
const request = require("supertest");
const app = require('../app');


beforeAll( async function() {
// add in an issue
const user1Data = {
    username: 'john',
    password: 'password',
    firstname: 'John',
    lastname: 'Williams',
    email: 'john@gmail.com',
    firstProperty: 'A1',
    secondProperty: 'C3',
    thirdProperty: ''
}
await Users.register(user1Data);

//make user an admin
//no test currently checks admin setting
await db.query(`UPDATE users SET is_admin = 't' WHERE username = 'john'`);


const user2Data = {
    username: 'james',
    password: 'password',
    firstname: 'John',
    lastname: 'Johnson',
    email: 'jim@gmail.com',
    firstProperty: 'D3',
    secondProperty: 'B4',
    thirdProperty: ''
}
await Users.register(user2Data);

//add in issue data
const data = {
    title: "testing issues",
    category: "high",
    description: "description for issue test"
}
await Issues.addIssue('john', data);

});

// remove data from all tables
afterAll(async function() {
    await db.query("DELETE FROM issues");
    await db.query("DELETE FROM users");
    await db.query("DELETE FROM issue_history");
});

//passes
//also checks detailed data available for defined issue
describe("Get /issues/username", () => {
    test("Gets issues for defined user", async function() {
        const res = await request(app).get("/issues/john");
        expect(res.statusCode).toBe(200)
        expect(res.body[0]).toEqual(expect.objectContaining({"title": "testing issues", "description": "description for issue test"}));
    })
})


//passes
//search issues for user with no issues
describe("Get /issues/username", () => {
    test("User with no issues returns undefined", async function() {
        const res = await request(app).get("/issues/james");
        expect(res.body[0]).not.toBeDefined();
    })
})

//passes
//add a new issue under existing user
describe("Patch /issues/user/add", () => {
    test("New issue added", async function(){
        const res = await request(app)
        .patch("/issues/john/add")
        .send({
            title: "Adding new issue",
            category: "High",
            description: "Adding new issue as a test"
        })
        expect(res.body[0]).toEqual(expect.objectContaining({"title": "Adding new issue", "category": "High", "username": "john", "description": "Adding new issue as a test"}));
    })
})

//get history of issue
describe("Get /issues/username/id/history", () => {

    test("Gets history of a defined issue", async function (){

        //need to find id of issue prior to adding history
        let issue_ref = await db.query(`SELECT id FROM issues WHERE username = 'john'`);
        let ref = issue_ref.rows[0].id
        await Issues.updateHistory(ref, 'john', 'test of history update', 'open');

        const res = await request(app).get(`/issues/john/${ref}/history`);
        expect(res.statusCode).toBe(200);
        expect(res.body[0]).toEqual(expect.objectContaining({"description": "test of history update"}));
    })
})

