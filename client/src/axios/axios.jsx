import axios from "axios";
import configKeys from "../config";

const connection = axios.create({
  baseURL: configKeys.BASE_URL ||" http://localhost:3000",
});

connection.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default connection;
