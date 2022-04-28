import { configureStore } from "@reduxjs/toolkit";
import sliceToDoReducer from './slices/toDoSlice'

const store = configureStore({
  reducer: {
    toDoArr: sliceToDoReducer,
  }
})

export default store