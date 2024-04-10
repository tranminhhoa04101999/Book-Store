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
      SEARCH_BOOK: (query: string, limit: number, currPage: number) =>
        `https://openlibrary.org/search.json?${query}&limit=${limit}&page=${currPage}`,
    },
  },
  app: {
    searchBook: (
      query: string,
      limit: number,
      currPage: number
    ): Promise<AxiosResponse<SearchRes["Search"]>> => {
      const checkQuery = query === "" ? "q=random" : "title=" + query;
      return API.apiInstance.get<SearchRes["Search"]>(
        API.API_PATH.APP.SEARCH_BOOK(checkQuery, limit, currPage)
      );
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
