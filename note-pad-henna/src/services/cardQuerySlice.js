import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:3000/card";


export const cardsAPI = createApi({
    reducerPath: "cardApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      //get all
      getCards: builder.query({
        query: () => `card`,
       
      }),
      getCard: builder.query({
        query: (id) => `card/${id}`,
      }),
      deleteCards: builder.mutation({
        query: (id) => ({
          url: `card/${id}`,
          method: "DELETE",
        }),
    }),
    postCards: builder.mutation({
      query: (newCard) => ({
        url: "categories",
        body: newCard,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    patchCards: builder.mutation({
        query: (id, updatedCard) => ({
          url: `card/${id}`,
          body: updatedCard,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
  }),
});

//RTK - hooks auto generate
export const {
    useDeleteCardsMutation,
    useGetCardQuery,
    useGetCardsQuery,
    usePatchCardsMutation,
    usePostCardsMutation
  } = cardsAPI;