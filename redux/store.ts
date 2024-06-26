"use client";
import { configureStore } from "@reduxjs/toolkit";
      //      import { setupListeners } from '@reduxjs/toolkit/query'
  import { apiSlice } from "./features/api/apiSlice";
  import authSlice from "./features/auth/authSlice";


export const store = configureStore({
  reducer: {    [apiSlice.reducerPath]: apiSlice.reducer, 
    auth: authSlice,  // слайс аутентификации
  },

  devTools: true, 
  middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware), 
   });

 