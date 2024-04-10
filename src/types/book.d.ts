export {};

declare global {
  interface SearchRes {
    Book: { title_sort: string; author_name: string; cover_i: string };
    Search: {
      numFound: string;
      start: number;
      numFoundExact: boolean;
      docs: Book[];
    };
  }
  interface SearchReq {
    Body: {
      query: string | null;
      limit: number;
      currPage: number | null;
    };
  }
  interface BookData {
    searchText: string;
    currPage: number;
    books: SearchRes["Book"][];
    loading: boolean;
  }
}
