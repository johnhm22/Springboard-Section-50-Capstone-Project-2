const db = require("../db");
const bcrypt = require("bcrypt");
const {BCRYPT_WORK_FACTOR} = require("../config");
const { UnauthorizedError } = require("../../../../Section 43 React Jobly/react-jobly/jobly-backend/expressError");

class User {

    static async register({username, password, firstname, lastname, email, firstProperty, secondProperty, thirdProperty}){
        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        let result = await db.query(
            `INSERT INTO users 
            (username, 
            password, 
            firstname, 
            lastname, 
            email, 
            first_property,
            second_property,
            third_property
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING username, firstname, lastname, email, first_property, second_property, third_property`,
        [
            username,
            hashedPassword,
            firstname,
            lastname,
            email,
            firstProperty,
            secondProperty,
            thirdProperty
        ]);

        const user =  result.rows[0];
        return user;
        }

    static async login(username, password){
        let result = await db.query(
            `SELECT 
            username,
            password,
            firstname,
            lastname,
            email,
            first_property,
            second_property,
            third_property,
            is_admin
            FROM users 
            WHERE username = $1`,
            [username]
            );

            // console.log("result in User login method", result);

        const user = result.rows[0];

        // if (!username) throw new NotFoundError(`No username: ${username}`);

        if (user) {
            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
              delete user.password;
              return user;
            }
          }
        //   throw new UnauthorizedError("Invalid username/password");
          throw new UnauthorizedError("Invalid username/password");
        }
    }


module.exports = User;