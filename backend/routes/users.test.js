const db = require ("../db.js");
const Issues = require("../models/issues");
const Users = require("../models/users");
const request = require("supertest");
const app = require('../app');

process.env.NODE_ENV = 'test';

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
        //need to add is_admin = true
    }
    await Users.register(user1Data);
});

// remove user data from test database
afterAll(async function() {
    await db.query("DELETE FROM users");
});


describe("Login /users", () =>{

    //passes
    test("User can login", async function () {
        const res = await request(app)
        .post('/users/login')
        .send({
            username: 'john',
            password: 'password'
        })
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
                user: {
                username: "john",
                firstname: "John",
                lastname: "Williams",
                email: "john@gmail.com",
                first_property: 'A1',
                second_property: 'C3',
                third_property: '',
                is_admin: false
                }
            })
        });

    //passes
    test("Unkown user cannot login", async function () {
        const res = await request(app)
        .post('/users/login')
        .send({
            username: 'jack',
            password: 'password'
        })
        expect(res.statusCode).toBe(401)
    });
})


describe("Register /users/register", () =>{
    //passes
    test("User can register", async function () {
            const res = await request(app)
            .post('/users/register')
            .send({
                username: 'newTestUser',
                password: 'password',
                firstname: 'u1_first',
                lastname: 'u1_last',
                email: 'u1@gmail.com',
                firstProperty: 'P1',
                secondProperty: 'P2',
                thirdProperty: 'P3'
            })
            expect(res.statusCode).toBe(201);
            expect(res.body).toEqual({
                user: {
                    username: 'newTestUser',
                    firstname: 'u1_first',
                    lastname: 'u1_last',
                    email: 'u1@gmail.com',
                    first_property: 'P1',
                    second_property: 'P2',
                    third_property: 'P3'
                }
            })
        });
    })



