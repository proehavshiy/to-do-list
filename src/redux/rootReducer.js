import { configureStore } from "@reduxjs/toolkit";
// reducers
import sliceToDoReducer from './slices/toDoSlice/toDoSlice';
import sliceFilterReducer from './slices/filterSlice/filterSlice';
// constants
import { LSNAME_TODO, LSNAME_FILTER } from "../constants/constants";

const store = configureStore({
  reducer: {
    [LSNAME_TODO]: sliceToDoReducer,
    [LSNAME_FILTER]: sliceFilterReducer,
  }
})

export default store;