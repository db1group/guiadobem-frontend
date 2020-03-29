import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-54-89-248-30.compute-1.amazonaws.com:8080/api/public/"
});

export default api;
