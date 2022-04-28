import { createSlice } from "@reduxjs/toolkit";
// constants
import { LSNAME_TODO } from "../../constants/constants";
// utils
import { manageLocalStorage } from "../../utils/manageLocalStorage";
import { initState } from "../../utils/initState";
//others
import uniqid from 'uniqid';

export const toDoSlice = createSlice({
  name: LSNAME_TODO,
  initialState: initState(LSNAME_TODO),
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
      manageLocalStorage(LSNAME_TODO, 'set', newArr)
      return newArr
    },
    deleteToDo: (state, action) => {
      const { id, deleteAll = false } = action.payload
      // delete all ToDos or current toDo
      let newArr;
      deleteAll
        ? newArr = []
        : newArr = [...state].filter((el) => el.id !== id)
      // save to localStorage arr of todos
      manageLocalStorage(LSNAME_TODO, 'set', newArr)
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
      manageLocalStorage(LSNAME_TODO, 'set', newArr)
      // immer error so dont return
      //return newArr
    },
    changeValue: (state, action) => {
      const { id, newValue } = action.payload
      const newArr = [...state].map((el) => {
        if (el.id === id) el.value = newValue
        return el
      })
      manageLocalStorage(LSNAME_TODO, 'set', newArr)
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

      manageLocalStorage(LSNAME_TODO, 'set', newArr)
      // return newArr
    },
    displayAll: (state, action) => {
      const newArr = [...state].map((el) => {
        el.isDisplay = true
        return el
      })

      manageLocalStorage(LSNAME_TODO, 'set', newArr)
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

      manageLocalStorage(LSNAME_TODO, 'set', newArr)
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

      manageLocalStorage(LSNAME_TODO, 'set', newArr)
      // return newArr
    }
  }
})

export const { addNewToDo, deleteToDo, changeStatus, changeValue, changeEditingMode, displayAll, displayActive, displayCompleted } = toDoSlice.actions
export default toDoSlice.reducer