import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: {
      type: "dark",
      homeBG: "#1d1a1d",
      themeColor: "#7e4877",
      borderColor: "#424242",
      defaultTextColor: "#8f8f8f",
      componentBG: "#242224",
    }
  },
  reducers: {
    darkMode: state => {
      state.value = {
        type: "dark",
        homeBG: "#1d1a1d",
        themeColor: "#7e4877",
        defaultTextColor: "#8f8f8f",
        componentBG: "#242224",
        borderColor: "#424242",
      }
    },
    lightMode: state => {
      state.value = {
        type: "light",
        homeBG: "#f8f8f8",
        themeColor: "#7e4877",
        defaultTextColor: "#3a3a3a",
        componentBG: "#fff",
        borderColor: "#f3f3f3",
      }
    },
  }
})

export const selectTheme = state => state.theme.value


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.theme.value

export const { darkMode, lightMode } = themeSlice.actions

export default themeSlice.reducer