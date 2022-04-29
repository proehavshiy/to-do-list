import { createSlice } from "@reduxjs/toolkit";
// constants
import { LSNAME_FILTER } from "../../../constants/constants";
// utils
import { initState } from "../../../utils/initState";
// reducers
import { setFilterStatusReducer } from "./reducers/setFilterStatusReducer";

export const filterSlice = createSlice({
  name: LSNAME_FILTER,
  initialState: initState(LSNAME_FILTER),
  reducers: {
    setFilterStatus: setFilterStatusReducer,
  }
})

export const { setFilterStatus } = filterSlice.actions
export default filterSlice.reducer