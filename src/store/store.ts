import detailsSlice from "./detailsSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { details: detailsSlice.reducer },
});

export default store;
