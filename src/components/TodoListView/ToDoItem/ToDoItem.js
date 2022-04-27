import classNames from 'classnames/bind'
import styles from './ToDoItem.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, deleteToDo, changeEditingStatus } from '../../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function ToDoItem({ name, id }) {
  const toDo = useSelector((state) => state.toDoArr[id])
  const dispatch = useDispatch()

  const handleCheckBox = () => dispatch(changeStatus({ id }))
  const handleDelete = () => dispatch(deleteToDo({ id }))
  const handleDoubleClick = () => dispatch(changeEditingStatus({ id }))

  return (
    <li className={cn('todoItem', { editing: toDo.isEditing })}
    >
      <input
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
        className="itemList"
      />
      <label value={name} className="labelContent"
        onDoubleClick={handleDoubleClick}
      >{name}</label>
      <input className="edit" id="editInput" defaultValue={name} type="text" />
      <button
        className="remove"
        onClick={handleDelete}
      />
    </li>
  )
}

export default ToDoItem