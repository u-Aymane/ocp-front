import axios from "axios";

const END_POINTAPI = `${process.env.REACT_APP_API_BASE_URL}`;

const instance = axios.create({
  baseURL: END_POINTAPI,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    mode: "no-cors",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : null,
    },
  };
});

const responseBody = (response) => response.data;

export const AppServices = {
  get: (path, body) =>
    instance.get(END_POINTAPI + path, body).then(responseBody),

  post: (path, body) =>
    instance.post(END_POINTAPI + path, body).then(responseBody),

  put: (path, body) =>
    instance.put(END_POINTAPI + path, body).then(responseBody),

  patch: (path, body) =>
    instance.patch(END_POINTAPI + path, body).then(responseBody),

  delete: (path, body) =>
    instance.delete(END_POINTAPI + path, body).then(responseBody),
  upload: (body, data_type, url, header) =>
    instance
      .post(END_POINTAPI + url, body, {
        headers: {
          ...header,
          "Data-Type": data_type,
        },
      })
      .then(responseBody),
};

export const GlobalManagement = {
  set: (key, val) => localStorage.setItem(key, val),
};

export default AppServices;
