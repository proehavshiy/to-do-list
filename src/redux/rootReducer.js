import { configureStore } from "@reduxjs/toolkit";
import SliceToDoReducer from './slices/toDoSlice'

const store = configureStore({
  reducer: {
    toDoArr: SliceToDoReducer,
  }
})

export default store