import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"
import themeSlice from "./themeSlice"
export default configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice
  }
})