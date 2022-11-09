import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./context/UserContext/UserContext";

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const TOKEN = currentUser?.accessToken;

const BASE_URL = "http://localhost:3005/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
