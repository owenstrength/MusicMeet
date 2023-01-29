import axios from "axios";
import { getData } from "../utils/storage";
import { BASE_URL } from "./api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const access_token = await getData("@access_token");
  req.headers.Authorization = `Bearer ${access_token}`;
  return req;
});

export default axiosInstance;