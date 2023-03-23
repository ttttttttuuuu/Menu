import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// url
const url = "http://localhost:5001";
// GET request
const createRequest = (url) => ({ url });

// POST request
const createPostRequest = (url, payload) => ({
  url,
  method: "POST",
  body: payload,
  headers: { "Content-Type": "application/json" },
});

// function
export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    //   Get menu
    getMenus: builder.query({
      query: (shopID) => createRequest(`/getMenu?shopID=${shopID}`),
    }),

    //  Get Business information
    getInfo: builder.query({
      query: (shopID) => createRequest(`/info?shopID=${shopID}`),
    }),

    // getOpenOrder: builder.mutation({
    //   query: (payload) => createRequest(`/getOrder`, payload),
    // }),
  }),
});

export const { useGetMenusQuery, useGetInfoQuery } = menuApi;
