import { createSlice } from "@reduxjs/toolkit";
// constants
import { LSNAME_FILTER } from "../../constants/constants";
// utils
import { manageLocalStorage } from "../../utils/manageLocalStorage";
import { initState } from "../../utils/initState";

export const filterSlice = createSlice({
  name: LSNAME_FILTER,
  initialState: initState(LSNAME_FILTER),
  reducers: {
    setFilterStatus: (state, { payload }) => {
      const updState = {
        ...state,
        currentStatus: payload,
      }
      // save to localStorage arr of todos
      manageLocalStorage(LSNAME_FILTER, 'set', updState)
      return updState
    },
  }
})

export const { setFilterStatus } = filterSlice.actions
export default filterSlice.reducer