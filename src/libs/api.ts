import axios, { AxiosResponse } from "axios";
import { url } from "inspector";

const API = {
  apiInstance: axios.create({
    baseURL: import.meta.env.VITE_API,
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      // ...(import.meta.env.VITE_ENV === "development" && {
      //   "Access-Control-Allow-Origin": "*",
      // }),
    },
  }),

  API_PATH: {
    APP: {
      LOGIN: "/example/login",
      SEARCH_BOOK: (query: string, limit: number, offset: number | undefined) =>
        `https://openlibrary.org/search.json?${query}&limit=${limit}&offset=${offset}`,
    },
  },
  app: {
    login: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.post(API.API_PATH.APP.LOGIN);
    },
    searchBook: (
      query: string,
      limit: number,
      offset: number | undefined
    ): Promise<AxiosResponse<void>> => {
      let checkQuery = query.trim() === "" ? "q=random" : "title=" + query;
      return API.apiInstance.get(
        API.API_PATH.APP.SEARCH_BOOK(checkQuery, limit, offset)
      );
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
