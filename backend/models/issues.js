// const { resourceLimits } = require("worker_threads");
const { query } = require("express");
const db = require("../db");

class Issue {
    static async getAll(){
        let result = await db.query("SELECT * FROM issues");
        return result.rows;
    }

    static async getIssuesByUser(username){
        const result = await db.query(`SELECT * FROM issues WHERE username = $1`, [username]);
        // let refOfIssue = await db.query(`SELECT id FROM issues WHERE username = 'john'`);
        return result.rows;
    }
 
    static async getIssueCountByUser(username){
        const result = await db.query(`SELECT COUNT(*) FROM issues WHERE username = $1 AND status = $2`, [username, 'open']);
        return result.rows[0];
    }

    static async addIssue(username, data){
        const {title, property, category, description} = data;
        const result = await db.query(`INSERT INTO issues (title, property, username, category, description) VALUES ($1, $2, $3, $4, $5) RETURNING title, property, username, category, description`, [title, property, username, category, description]);
        return result.rows;
    }


    static async getHistoryOfIssue(issue_ref){
        const result = await db.query(`SELECT * FROM issue_history WHERE issue_ref = $1 ORDER BY created_on`, [issue_ref]);
        return result.rows;
    }


    static async updateHistory(issue_ref, update_by, description, status){
        const result = await db.query(`INSERT INTO issue_history (issue_ref, update_by, description) VALUES ($1, $2, $3) RETURNING id, issue_ref, update_by, created_on, description`, [issue_ref, update_by, description]);
        const statusResult = await db.query(`UPDATE issues SET status = $1 WHERE id = $2 RETURNING id, title, status`, [status, issue_ref])
        return result.rows;
    }




}

module.exports = Issue;
