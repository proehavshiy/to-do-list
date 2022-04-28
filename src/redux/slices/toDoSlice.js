import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';

// get initial arr of todo from localStorage if it exists
// otherwise set default todo for demonstration
const initToDos = () => {
  let result;
  if (localStorage.getItem('toDo')) {
    result = JSON.parse(localStorage.getItem('toDo'))
  } else {
    result = [{
      id: uniqid(),
      isDone: false,
      isDisplay: true,
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
      const newArr = [...state, {
        id: uniqid(),
        isDone: false,
        isDisplay: true,
        isEditing: false,
        value: action.payload
      }]
      // save to localStorage arr of todos
      localStorage.setItem('toDo', JSON.stringify(newArr))
      return newArr
    },
    deleteToDo: (state, action) => {
      const { id, deleteAll = false } = action.payload
      // delete all ToDos or current toDo
      let newArr;
      deleteAll
        ? newArr = []
        : newArr = [...state].filter((el) => el.id !== id)

      localStorage.setItem('toDo', JSON.stringify(newArr))
      return newArr
    },
    changeStatus: (state, action) => {
      const { id, changeAll = false } = action.payload
      let newArr;
      switch (changeAll) {
        case false:
          // change status of a current single ToDo
          newArr = [...state].map((el) => {
            if (el.id === id) el.isDone = !el.isDone
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
      const { id, newValue } = action.payload
      const newArr = [...state].map((el) => {
        if (el.id === id) el.value = newValue
        return el
      })
      localStorage.setItem('toDo', JSON.stringify(newArr))
      // return newArr
    },
    changeEditingMode: (state, action) => {
      const { id, changeAll = false } = action.payload
      let newArr;
      switch (changeAll) {
        case false:
          newArr = [...state].map((el) => {
            if (el.id === id) el.isEditing = !el.isEditing
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
    },
    displayAll: (state, action) => {
      const newArr = [...state].map((el) => {
        el.isDisplay = true
        return el
      })

      localStorage.setItem('toDo', JSON.stringify(newArr))
      // return newArr
    },
    displayActive: (state, action) => {
      const newArr = [...state].map((el) => {
        if (!el.isDone) {
          el.isDisplay = true
        } else {
          el.isDisplay = false
        }
        return el
      })

      localStorage.setItem('toDo', JSON.stringify(newArr))
      // return newArr
    },
    displayCompleted: (state, action) => {
      const newArr = [...state].map((el) => {
        if (el.isDone) {
          el.isDisplay = true
        } else {
          el.isDisplay = false
        }
        return el
      })

      localStorage.setItem('toDo', JSON.stringify(newArr))
      // return newArr
    }
  }
})

export const { addNewToDo, deleteToDo, changeStatus, changeValue, changeEditingMode, displayAll, displayActive, displayCompleted } = toDoSlice.actions
export default toDoSlice.reducer