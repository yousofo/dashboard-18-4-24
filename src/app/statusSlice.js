import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    value: {
      navBar: true,
    }
  },
  reducers: {
    switchStatus: state => {
      state.value = {
        navBar: !state.value.navBar,
      }
    },
  }
})

export const selectStatus = state => state.status.value.navBar

export const {switchStatus} = statusSlice.actions

export default statusSlice.reducer