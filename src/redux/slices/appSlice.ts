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
    payload.query,
    payload.limit,
    payload.currPage
  );
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
  },
});
export const { setSearchText, setCurrPage } = appSlice.actions;

export default appSlice.reducer;
