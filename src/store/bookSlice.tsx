import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';

interface Book {
  author: string;
  country: string;
  language: string;
  pages: number;
  link: string;
  imageLink: string;
  title: string;
  price: number;
  rating: number;
  reviews: string[];
  isLike: boolean;
}

interface BookState {
  books: Book[];
  loading: boolean;
  error: boolean;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: false,
};

export const fetchBooks = createAsyncThunk<Book[], string>(
  'books/fetchBooks',
  async search => {
    try {
      const response: AxiosResponse<Book[]> = await axios.get(
        'https://books-list-api.vercel.app/books/',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
          },
          params: {
            query: search,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default bookSlice.reducer;
