import axios from "axios";

const api = axios.create({
  baseURL: "https://rocketseat-nove.heroku.com/api"
});
export default api;