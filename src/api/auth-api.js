import axios from "axios";

const authApi = {};

authApi.register = (body) =>
  axios.post("http://localhost:8888/auth/register", body);
authApi.login = (body) => axios.post("http://localhost:8888/auth/login", body);
authApi.getSong = () => axios.get("http://localhost:8888/auth/home-redvelvet");

export default authApi;
