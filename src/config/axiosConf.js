import axios from "axios";
import { store } from "../store/store";
import { apiURL } from "./apiConf";

export const setupAxios = () => {
  axios.defaults.baseURL = apiURL();
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const token = store.getState().userState.accessToken;
      if (token != null) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      return Promise.reject(error);
    }
  );
};
