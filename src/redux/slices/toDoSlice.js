import { createSlice } from "@reduxjs/toolkit";

// get initial arr of todo from localStorage if it exists
// otherwise set default todo for demonstration
const initToDos = () => {
  let result;
  if (localStorage.getItem('toDo')) {
    result = JSON.parse(localStorage.getItem('toDo'))
  } else {
    result = [{
      isDone: false,
      value: 'initial ToDo'
    }]
  }
  return result
}


export const toDoSlice = createSlice({
  name: 'toDoArr',
  initialState: initToDos(),
  reducers: {
    addNewToDo: (state, action) => {
      console.log('addNewToDo action:', action);

      const newArr = [...state, { isDone: false, value: action.payload }]
      // save to localStorage arr of todos
      localStorage.setItem('toDo', JSON.stringify(newArr))
      return newArr
    },
    deleteOne: state => {
      console.log('deleteOne state:', state);
    },
    changeStatus: state => {
      console.log('changeStatus state:', state);
    }
  }
})

export const { addNewToDo, deleteOne, changeStatus } = toDoSlice.actions
export default toDoSlice.reducer