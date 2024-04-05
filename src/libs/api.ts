import { Search } from "@/interface/Book";
import axios, { AxiosResponse } from "axios";

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
      SEARCH_BOOK: (query: string, limit: number, offset: number | undefined) =>
        `https://openlibrary.org/search.json?${query}&limit=${limit}&offset=${offset}`,
    },
  },
  app: {
    searchBook: (
      query: string,
      limit: number,
      offset: number | undefined
    ): Promise<AxiosResponse<Search>> => {
      const checkQuery = query === "" ? "q=random" : "title=" + query;
      return API.apiInstance.get<Search>(
        API.API_PATH.APP.SEARCH_BOOK(checkQuery, limit, offset)
      );
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
