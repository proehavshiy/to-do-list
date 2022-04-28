import { configureStore } from "@reduxjs/toolkit";
import sliceToDoReducer from './slices/toDoSlice';
import sliceFilterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    toDoArr: sliceToDoReducer,
    toDoFilter: sliceFilterReducer,
  }
})

export default store;