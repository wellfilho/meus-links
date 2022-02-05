import axios from "axios";

export const key = "96896a0211d3d4b55be8adfe5e9974f0218eb917";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
