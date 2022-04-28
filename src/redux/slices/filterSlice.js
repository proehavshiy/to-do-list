import { createSlice } from "@reduxjs/toolkit";
// constants
import { LSNAME_FILTER } from "../../constants/constants";

const initFilterStatus = () => {
  let result;
  if (localStorage.getItem(LSNAME_FILTER)) {
    result = JSON.parse(localStorage.getItem(LSNAME_FILTER))
  } else {
    result = {
      currentStatus: 'all'
    }
  }
  return result
}

export const filterSlice = createSlice({
  name: LSNAME_FILTER,
  initialState: initFilterStatus(),
  reducers: {
    setFilterStatus: (state, { payload }) => {
      const updState = {
        ...state,
        currentStatus: payload,
      }
      // save to localStorage arr of todos
      localStorage.setItem(LSNAME_FILTER, JSON.stringify(updState))
      return updState
    },
  }
})

export const { setFilterStatus } = filterSlice.actions
export default filterSlice.reducer