import classNames from 'classnames/bind'
import styles from './ToDoItem.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, deleteToDo, changeValue, changeEditingMode } from '../../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function ToDoItem({ name, id }) {
  const toDo = useSelector((state) => state.toDoArr[id])
  const dispatch = useDispatch()

  const handleCheckBox = () => dispatch(changeStatus({ id }))
  const handleDelete = () => dispatch(deleteToDo({ id }))
  const handleDoubleClick = () => dispatch(changeEditingMode({ id }))
  const handleChangeValue = (e) => {
    // by pressing Enter renew a value of ToDo
    if (e.keyCode === 13) {
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