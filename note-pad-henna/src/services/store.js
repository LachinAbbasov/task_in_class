import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cardsAPI } from "./cardQuerySlice";


const store = configureStore({
    reducer: {
      [cardsAPI.reducerPath]: cardsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardsAPI.middleware),
  });
  setupListeners(store.dispatch)
  export default store;