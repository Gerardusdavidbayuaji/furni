import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export default axiosWithConfig;
