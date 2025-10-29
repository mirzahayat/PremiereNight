import axios, { AxiosInstance } from 'axios';
import { APP_KEY, APPIMAGE, BASEURL } from '@env';

const BASE_URL = String(BASEURL);
const API_KEY = String(APP_KEY);
const ImageURL = String(APPIMAGE);

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );

  HTTP_CLIENT.interceptors.response.use(
    response => {
      return response;
    },
    err => {
      console.log(err);
    },
  );
};

export { HTTP_CLIENT, setupAxios, initialConfig, API_KEY, ImageURL };
