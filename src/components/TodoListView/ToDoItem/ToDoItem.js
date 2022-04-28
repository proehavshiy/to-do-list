
import React from 'react';
// styles
import styles from './ToDoItem.module.css';
import classNames from 'classnames/bind';
// redux
import { useDispatch } from 'react-redux';
import { changeStatus, deleteToDo, changeValue, changeEditingMode } from '../../../redux/slices/toDoSlice';
// constants
import { EDIT_INPUT_ID, SUMBIT_KEYCODE } from '../../../constants/constants';

const cn = classNames.bind(styles);

function ToDoItem({ toDo }) {
  const { id, value, isDisplay } = toDo
  const dispatch = useDispatch()

  const handleCheckBox = () => dispatch(changeStatus({ id }))
  const handleDelete = () => dispatch(deleteToDo({ id }))
  const handleDoubleClick = () => dispatch(changeEditingMode({ id }))
  const handleChangeValue = (e) => {
    // by pressing Enter renew a value of ToDo in case of not empty input value
    if (e.keyCode === SUMBIT_KEYCODE && e.target.value !== '') {
      dispatch(changeValue({
        id,
        newValue: e.target.value
      }))
      // and close editingMode
      dispatch(changeEditingMode({ id }))
    }
  }

  return (
    <li
      className={cn('todoItem', { editing: toDo.isEditing })}
      style={{ display: isDisplay ? 'block' : 'none' }}
    >
      <input
        className={cn('itemCheckBox')}
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
      />
      <label
        className={cn('labelContent')}
        value={value}
        onDoubleClick={handleDoubleClick}
      >{value}</label>
      <input className={cn('edit')}
        id={EDIT_INPUT_ID}
        type="text"
        defaultValue={value}
        onKeyUp={handleChangeValue}
      />
      <button
        className={cn('remove')}
        onClick={handleDelete}
      />
    </li>
  )
}

export default ToDoItem;