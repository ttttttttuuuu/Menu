import { configureStore } from "@reduxjs/toolkit";

import { menuApi } from "../services/menuApi";

export default configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});
// setupListeners(store.dispatch);
