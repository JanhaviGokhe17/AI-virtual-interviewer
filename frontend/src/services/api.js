import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // backend server URL
});

export default API;
