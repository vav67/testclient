///////"use client";
import { configureStore } from "@reduxjs/toolkit";
      //      import { setupListeners } from '@reduxjs/toolkit/query'
  import { apiSlice } from "./features/api/apiSlice";
  import authSlice from "./features/auth/authSlice";
  import shopSlice from "./features/shop/shopSlice";

export const store = configureStore({
  reducer: {    [apiSlice.reducerPath]: apiSlice.reducer, 
    auth: authSlice,  // слайс аутентификации
    shop: shopSlice,
  },

  devTools: true, 
  middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware), 
   });

 

   //  // call the load user function on every page load
// //вызывать функцию загрузки юзера при загрузке страни
//   const initializeApp = async () => {
// //   //вызываем токен обновления 06-45-45 
// //   // 07-58-46 это теперь отключено 
// //   // так как это обновление полностью  работает над серверной частью
//   await store.dispatch(
//    apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }) 
//   );
 
   
//  //    await store.dispatch(
//  //          apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
//  //    );
 
//   };
 
//    initializeApp()  // запускаем пробую опять после как добавил
// //    //  updateAccessToken, //рефреш до аутентифик-и 06-47-29 "синхронизация" обновляет токен там next()
