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
      SEARCH_IMG: (coverI: string) =>
        `https://covers.openlibrary.org/b/id/${coverI}-M.jpg`,
      SEARCH_BOOK_WITH_SUB: (subject: string, limit: number, offset: number) =>
        `https://openlibrary.org/subjects/${subject}.json?limit=${limit}&offset=${offset}`,
    },
  },
  app: {
    searchBook: (
      query: string,
      limit: number,
      currPage: number
    ): Promise<AxiosResponse<SearchRes["Search"]>> => {
      const checkQuery = query === "random" ? "q=random" : "title=" + query;
      return API.apiInstance.get<SearchRes["Search"]>(
        API.API_PATH.APP.SEARCH_BOOK(checkQuery, limit, currPage)
      );
    },
    searchIMG: (coverI: string): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.APP.SEARCH_IMG(coverI));
    },
    searchBookWithSub: (
      subject: string,
      limit: number,
      currPage: number
    ): Promise<AxiosResponse<SearchRes["SearchSub"]>> => {
      const offset = (currPage - 1) * limit;
      return API.apiInstance.get<SearchRes["SearchSub"]>(
        API.API_PATH.APP.SEARCH_BOOK_WITH_SUB(subject, limit, offset)
      );
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
