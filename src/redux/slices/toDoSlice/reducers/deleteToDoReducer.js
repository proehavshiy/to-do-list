// utils
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO } from '../../../../constants/constants';

export const deleteToDoReducer = (state, action) => {
  const { id, deleteAll = false } = action.payload
  // delete all ToDos or current toDo
  let updState;
  deleteAll
    ? updState = []
    : updState = [...state].filter((el) => el.id !== id)
  // save to localStorage arr of todos
  manageLocalStorage(LSNAME_TODO, 'set', updState)
  return updState
}