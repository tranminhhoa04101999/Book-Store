import API from "@/libs/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: BookData = {
  searchText: "",
  currPage: 1,
  books: [],
  loading: false,
  bookDetails: {
    title: "",
    description: { value: "ec" },
    subjects: [],
    subjectToString: "",
    subject_times: [],
    timeToString: "",
    covers: [7453818],
  },
};

export const getBookInAPI = createAsyncThunk<
  SearchRes["Search"]["docs"],
  SearchReq["Body"]
>("app/getBookInAPI", async (payload: SearchReq["Body"]) => {
  const res = await API.app.searchBook(
    payload.query as string,
    payload.limit,
    payload.currPage as number
  );
  return res.data.docs;
});

export const getBookWithSub = createAsyncThunk<
  SearchRes["SearchSub"]["works"],
  SearchReq["BodySub"]
>("app/getBookWithSub", async (payload: SearchReq["BodySub"]) => {
  const res = await API.app.searchBookWithSub(
    payload.subject,
    payload.limit,
    payload.currPage
  );
  return res.data.works;
});

export const getBookDetails = createAsyncThunk<SearchRes["BookDetail"], string>(
  "app/getBookDetails",
  async (payload: string) => {
    const res = await API.app.searchBookDetails(payload);
    return res.data;
  }
);

export const getBookWithAuthor = createAsyncThunk<
  SearchRes["Search"]["docs"],
  string
>("app/getBookWithAuthor", async (payload: string) => {
  const res = await API.app.searchBookWithAuthor(payload);
  return res.data.docs;
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchText: (state: BookData, action: PayloadAction<string>) => {
      return { ...state, searchText: action.payload };
    },
    setCurrPage: (state: BookData, action: PayloadAction<number>) => {
      return { ...state, currPage: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookInAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    builder.addCase(getBookInAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBookWithSub.fulfilled, (state, action) => {
      state.loading = false;
      const arrMapper: SearchRes["Book"][] = [];
      // mapper to correct data
      action.payload.map((e) => {
        const temp = {
          title_sort: e.title,
          author_name: e.authors[0].name,
          cover_i: e.cover_id,
          key: "",
        };
        arrMapper.push(temp);
      });
      state.books = arrMapper;
    });
    builder.addCase(getBookWithSub.pending, (state) => {
      state.loading = true;
    });

    // get book details
    builder.addCase(getBookDetails.fulfilled, (state, action) => {
      // state.bookDetails = action.payload;
      state.bookDetails.title = action.payload.title;
      console.log("action.payload", action.payload);

      // subject to string
      if (action.payload.subjects !== undefined) {
        state.bookDetails.subjectToString = action.payload.subjects.join(", ");
      }
      if (action.payload.subject_times !== undefined) {
        state.bookDetails.timeToString =
          action.payload.subject_times.join(", ");
      }

      // get description
      const des =
        typeof action.payload.description !== "string" &&
        action.payload.description != undefined
          ? action.payload.description.value
          : action.payload.description;
      state.bookDetails.description.value = des;

      if (action.payload.covers !== undefined) {
        state.bookDetails.covers = action.payload.covers;
      }
    });

    // get book with author
    builder.addCase(getBookWithAuthor.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });

    builder.addCase(getBookWithAuthor.pending, (state) => {
      state.loading = true;
    });
  },
});
export const { setSearchText, setCurrPage } = appSlice.actions;

export default appSlice.reducer;
