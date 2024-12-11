import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

// export const REACT_APP_BASE_URL = "https://electro-new.onrender.com/api/v1/";

export const REACT_APP_BASE_URL = "http://localhost:8080/api/v1/";

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
});

// Add interceptor to set token from cookies
axiosInstance.interceptors.request.use((config) => {
  const token = cookies.get("accessToken");
  console.log(token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance };
