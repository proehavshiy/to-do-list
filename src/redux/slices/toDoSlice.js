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
      isEditing: false,
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
      console.log('state:', state);

      const newArr = [...state, { isDone: false, isEditing: false, value: action.payload }]
      console.log('newArr:', newArr);
      // save to localStorage arr of todos
      localStorage.setItem('toDo', JSON.stringify(newArr))
      return newArr
    },
    deleteToDo: (state, { payload: { id } }) => {
      // filter add and delete the toDo
      const newArr = [...state].filter((_, index) => index !== id)
      localStorage.setItem('toDo', JSON.stringify(newArr))
      return newArr
    },
    changeStatus: (state, action) => {
      const { id, changeAll = false } = action.payload
      let newArr;
      switch (changeAll) {
        case false:
          // change status of a current single ToDo
          newArr = [...state].map((el, index) => {
            if (index === id) el.isDone = !el.isDone
            return el
          })
          break
        case true:
          // change statuses of all ToDos
          const checkStatuses = state.every((el) => el.isDone === true)
          checkStatuses
            ? newArr = [...state].map((el) => {
              el.isDone = false
              return el
            })
            : newArr = [...state].map((el) => {
              el.isDone = true
              return el
            })
          break
        default:
          newArr = state
      }

      // upd localStorage
      localStorage.setItem('toDo', JSON.stringify(newArr))
      // immer error so dont return
      //return newArr
    },
    changeValue: (state, action) => {

    },
    changeEditingStatus: (state, action) => {
      // console.log('act:', action);
      const { id, changeAll = false } = action.payload
      let newArr;
      switch (changeAll) {
        case false:
          newArr = [...state].map((el, index) => {
            if (index === id) el.isEditing = !el.isEditing
            return el
          })
          break
        case true:
          newArr = [...state].map((el) => {
            el.isEditing = false
            return el
          })
          break
        default:
          newArr = state
      }

      localStorage.setItem('toDo', JSON.stringify(newArr))
      // return newArr
    }
  }
})

export const { addNewToDo, deleteToDo, changeStatus, changeValue, changeEditingStatus } = toDoSlice.actions
export default toDoSlice.reducer