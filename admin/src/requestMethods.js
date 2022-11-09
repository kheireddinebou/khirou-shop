import axios from "axios";

const adminUser = JSON.parse(localStorage.getItem("adminUser")) || {};
const TOKEN = adminUser?.accessToken;

const BASE_URL = "http://localhost:3005/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
