import classNames from 'classnames/bind'
import styles from './ToDoItem.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, deleteToDo, changeValue, changeEditingMode } from '../../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function ToDoItem({ name, id, isDisplay }) {
  const toDo = useSelector((state) => state.toDoArr.find((el) => el.id === id))
  const dispatch = useDispatch()

  const handleCheckBox = () => dispatch(changeStatus({ id }))
  const handleDelete = () => dispatch(deleteToDo({ id }))
  const handleDoubleClick = () => dispatch(changeEditingMode({ id }))
  const handleChangeValue = (e) => {
    // by pressing Enter renew a value of ToDo in case of not empty input value
    if (e.keyCode === 13 && e.target.value !== '') {
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
        className="itemList"
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
      />
      <label
        className="labelContent"
        value={name}
        onDoubleClick={handleDoubleClick}
      >{name}</label>
      <input className="edit"
        id="editInput"
        type="text"
        defaultValue={name}
        onKeyUp={handleChangeValue}
      />
      <button
        className="remove"
        onClick={handleDelete}
      />
    </li>
  )
}

export default ToDoItem