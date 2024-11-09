import axios from "axios";

const productionURL = process.env.REACT_APP_BASE_API_URL;

export const apiClient = axios.create({
  baseURL: productionURL,
});
