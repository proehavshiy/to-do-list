import { configureStore } from "@reduxjs/toolkit";
import sliceToDoReducer from './slices/toDoSlice';
import sliceFilterReducer from './slices/filterSlice';
import { LSNAME_TODO, LSNAME_FILTER } from "../constants/constants";

const store = configureStore({
  reducer: {
    [LSNAME_TODO]: sliceToDoReducer,
    [LSNAME_FILTER]: sliceFilterReducer,
  }
})

export default store;