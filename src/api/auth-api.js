import axios from "../config/axios";

const authApi = {};

authApi.register = (body) => axios.post("/auth/register", body);
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get("/auth/me");

authApi.getSong = () => axios.get("/auth/home-redvelvet");

// authApi.addToFavorites = (userId, songId) =>
//   axios.post("/auth/add-to-favorites", { songId });

export default authApi;
