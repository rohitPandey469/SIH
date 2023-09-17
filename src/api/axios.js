import axios from "axios";
const BASE_URL = "http://localhost:5000";

const API = axios.create({ baseURL: "http://localhost:5000" });

// registering the user
export const auth = (authData) => API.post("/user/auth".authData);
