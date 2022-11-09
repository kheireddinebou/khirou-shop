import axios from "axios";

const adminUser = JSON.parse(localStorage.getItem("adminUser")) || {};
const TOKEN = adminUser?.accessToken;

const BASE_URL = "https://khirou-shop-api.onrender.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
