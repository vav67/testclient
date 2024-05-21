


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
      reducerPath:  'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URI, }),
  endpoints: (builder) => ({
    
    refreshToken: builder.query({
      query: (data) => ({
        url: "refresh",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
 //-----сам получить куки----------------------------------------
  //  получить куки
  getCookie: builder.query({
    query: () => ({
      url: "get-cookie",
      method: "GET",
      credentials: "include" as const,//полномочия включены
    }),
  }),

 // --------------------логинимся---------------------------------
   loadUser: builder.query({
  query: (data) => ({
    url: "me",
    method: "GET",
    credentials: "include" as const,
  }),
  async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    try {
       
      const result = await queryFulfilled;
     
      //пока dispatch(
      //пока   userLoggedIn({
      //пока     accessToken: result.data.accessToken,
      //пока     user: result.data.user,
      //пока   })
      //пока );
    } catch (error: any) {
      console.log(error);
    }
  },
}),
//------------------------------------------------------------

    
   }),
})
export const { 
        useRefreshTokenQuery, 
        useLoadUserQuery,
        useGetCookieQuery  // сам получаю куки 
       
 } = apiSlice;                                