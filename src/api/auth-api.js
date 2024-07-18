import axios from "../config/axios";

const authApi = {};

authApi.register = (body) => axios.post("/auth/register", body);
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get("/auth/me");

authApi.getSong = () => axios.get("/auth/home-redvelvet");

authApi.getFavoriteSongs = (userId) => axios.get(`/auth/favorites/${userId}`);

authApi.addToFavorites = (songId) =>
  axios.post("/auth/add-to-favorites", { songId });

authApi.removeFromFavorites = (favoriteSongId) =>
  axios.delete(`/auth/delete-from-favorites/${favoriteSongId}`);

authApi.updateProfile = (body) => axios.put("/auth/update-profile", body);

export default authApi;
