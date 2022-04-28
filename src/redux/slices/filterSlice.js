import { createSlice } from "@reduxjs/toolkit";

const initFilterStatus = () => {
  let result;
  if (localStorage.getItem('filterToDo')) {
    result = JSON.parse(localStorage.getItem('filterToDo'))
  } else {
    result = {
      currentStatus: 'all'
    }
  }
  return result
}

export const filterSlice = createSlice({
  name: 'filterToDo',
  initialState: initFilterStatus(),
  reducers: {
    setFilterStatus: (state, { payload }) => {
      const updState = {
        ...state,
        currentStatus: payload,
      }
      // save to localStorage arr of todos
      localStorage.setItem('filterToDo', JSON.stringify(updState))
      return updState
    },
  }
})

export const { setFilterStatus } = filterSlice.actions
export default filterSlice.reducer