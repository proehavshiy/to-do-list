import { configureStore } from "@reduxjs/toolkit";
// reducers
import sliceToDoReducer from './slices/toDoSlice/toDoSlice';
import sliceFilterReducer from './slices/filterSlice/filterSlice';
// constants
import { LSNAME_TODO, LSNAME_FILTER } from "../constants/constants";

export const rootReducer = {
  [LSNAME_TODO]: sliceToDoReducer,
  [LSNAME_FILTER]: sliceFilterReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store;