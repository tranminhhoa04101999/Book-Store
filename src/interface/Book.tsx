export interface Book {
  title_sort: string;
  author_name: string;
  cover_i: string;
}

export interface Search {
  numFound: string;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
}
