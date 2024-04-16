export {};

declare global {
  interface SearchRes {
    Book: {
      title_sort: string;
      author_name: string;
      cover_i: string;
      key: string;
    };
    Search: {
      numFound: string;
      start: number;
      numFoundExact: boolean;
      docs: Book[];
    };
    SearchSub: {
      works: Book[];
    };
    BookDetail: {
      title: string;
      description: Description;
      subjects: [];
      subjectToString: string;
      subject_times: string[];
      timeToString: string;
      covers: number[];
    };
  }
  interface SearchReq {
    Body: {
      query: string | null;
      limit: number;
      currPage: number | null;
    };
    BodySub: {
      subject: string;
      limit: number;
      currPage: number;
    };
  }
  interface BookData {
    searchText: string;
    currPage: number;
    books: SearchRes["Book"][];
    loading: boolean;
    bookDetails: SearchRes["BookDetail"];
  }
  interface Category {
    label: string;
  }
  interface Description {
    value: string;
  }
}
