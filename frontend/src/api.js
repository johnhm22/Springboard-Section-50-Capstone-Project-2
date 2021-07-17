import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class EstateApi {

  // Individual API routes

  static async getAllIssues() {
      let res = await axios.get(`${BASE_URL}/issues`);
      return res.data;
  }

  static async addIssue(user, title, property, description, category) {
      let res = await axios({
        method: "patch",
        url: `${BASE_URL}/issues/${user}/add}`,
        data: {
        username: user,
        title,
        property,
        category,
        description
        }
      });
      return res.data;
  }

  static async getIssuesByUser(user) {
      let res = await axios.get(`${BASE_URL}/issues/${user}`);
      return res.data;
  }
 
  static async getIssueCountByUser(username) {
    let res = await axios.get(`${BASE_URL}/users/${username}/profile/count`)
    return res.data;
  }


  static async getHistoryOfIssue(user, id) {
      let res = await axios.get(`${BASE_URL}/issues/${user}/${id}/history`);
      return res.data;
  }

}

    export default EstateApi;