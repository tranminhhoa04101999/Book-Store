import API from "@/libs/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: BookData = {
  searchText: "",
  currPage: 1,
  books: [],
  loading: false,
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
        };
        arrMapper.push(temp);
      });
      state.books = arrMapper;
    });
    builder.addCase(getBookWithSub.pending, (state) => {
      state.loading = true;
    });
  },
});
export const { setSearchText, setCurrPage } = appSlice.actions;

export default appSlice.reducer;
