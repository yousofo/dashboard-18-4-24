import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"
import themeSlice from "./themeSlice"
import statusSlice from "./statusSlice"
export default configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
    status: statusSlice
  }
})