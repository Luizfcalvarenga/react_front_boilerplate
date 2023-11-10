import axios from "axios";
import Qs from "qs";

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem("@app/token");
  const uid = window.localStorage.getItem("@app/uid");
  const client = window.localStorage.getItem("@app/client");
  const site = window.localStorage.getItem("@app/site");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.uid = uid;
    config.headers.client = client;
    config.headers["access-token"] = token;
  }
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Content-Type"] = "application/json";
  config.headers["site"] = site;
  config.paramsSerializer = (params) => {
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false,
    });
  };

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      // logout();
    } else if (error.response.status === 403) {
      // logout();
    }
    return Promise.reject(error);
  }
);

export { api };
