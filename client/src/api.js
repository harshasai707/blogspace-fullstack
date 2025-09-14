import axios from "axios";

// Base API instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if your server runs elsewhere
});

// Attach token automatically if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
