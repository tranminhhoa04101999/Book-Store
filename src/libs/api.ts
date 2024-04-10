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
      SEARCH_BOOK: (
        query: string | null,
        limit: number,
        currPage: number | null
      ) =>
        `https://openlibrary.org/search.json?${query}&limit=${limit}&page=${currPage}`,
    },
  },
  app: {
    searchBook: (
      query: string | null,
      limit: number,
      currPage: number | null
    ): Promise<AxiosResponse<SearchRes["Search"]>> => {
      const checkQuery = query === "random" ? "q=random" : "title=" + query;
      return API.apiInstance.get<SearchRes["Search"]>(
        API.API_PATH.APP.SEARCH_BOOK(checkQuery, limit, currPage)
      );
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
