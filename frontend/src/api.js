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
  // the token for interactive with the API will be stored here.
  // static token;

  // static async request(endpoint, data = {}, method = "get") {
  //   console.debug("API Call:", endpoint, data, method);

  //   //there are multiple ways to pass an authorization token, this is how you pass it in the header.
  //   //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
  //   const url = `${BASE_URL}/${endpoint}`;
  //   const headers = { Authorization: `Bearer ${EstateApi.token}` };
  //   const params = (method === "get")
  //       ? data
  //       : {};

  //   try {
  //     return (await axios({ url, method, data, params, headers })).data;
  //   } catch (err) {
  //     console.error("API Error:", err.response);
  //     let message = err.response.data.error.message;
  //     throw Array.isArray(message) ? message : [message];
  //   }
  // }

  // Individual API routes


//   static async getCompany(handle) {
//     let res = await this.request(`companies/${handle}`);
//     return res.company;
//   }
 
//   static async getCompanies() {
//     let res = await this.request(`companies`);
//     return res.companies;
//   }

static async register() {
  console.log("register method called")
    // let res = await this.request(`issues`);
    // let res = await axios.get(`${BASE_URL}/issues`);
    let res = await axios.post(`http://localhost:3001/issues`);
    console.log("res.data ", res.data);
    return res.data;
}


  static async getAllIssues() {
    console.log("getAllIssues method called")
      // let res = await this.request(`issues`);
      // let res = await axios.get(`${BASE_URL}/issues`);
      let res = await axios.get(`http://localhost:3001/issues`);
      console.log("res.data ", res.data);
      return res.data;
  }


  static async addIssue(user, title, property, description, category) {
    console.log("addIssue method called");
      // let res = await this.request(`issues`);
      // let res = await axios.get(`${BASE_URL}/issues`);
      let res = await axios({
        method: "patch",
        url: `http://localhost:3001/issues/${user}/add`,
        data: {
        username: user,
        title,
        property,
        category,
        description
        }
      });
      console.log("res.data ", res.data);
      return res.data;
  }





  static async getIssuesByUser(user) {
    console.log("username is: ", user);
    console.log("getIssuesByUser method called")
      // let res = await axios.get(`${BASE_URL}/issues`);
      let res = await axios.get(`http://localhost:3001/issues/${user}`);
      console.log("res.data ", res.data);
      return res.data;
  }
 
  static async getHistoryOfIssue(user, id) {
    console.log("user in api", user);
    console.log("id in api", id);
    console.log("getHistoryOfIssue method called")
      // let res = await axios.get(`${BASE_URL}/issues`);
      let res = await axios.get(`http://localhost:3001/issues/${user}/${id}/history`);
      console.log("res.data ", res.data);
      return res.data;
  }


  static async getUser({username}) {
      let res = await this.request(`users/${username}`);
      return res.user;
  }

  static async filterIssues() {
      let res = await this.request(`issues`);
      return res;
  }

  static async updateUser(username, patch) {
      let res = await this.request(`users/${username}`, patch);
      return res;

  }

//   static async addUser(put, data) {
//       let res = await this.request(`users`, put, data)
//   }
  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


    export default EstateApi;