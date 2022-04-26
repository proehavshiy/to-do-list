import classNames from 'classnames/bind'
import styles from './ToDoItem.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function ToDoItem({ name, id }) {
  const isDone = useSelector((state) => state.toDoArr[id].isDone)
  const dispatch = useDispatch()

  function handleCheck(e) {
    dispatch(changeStatus({
      id,
      newStatus: !isDone,
    }))
  }

  return (
    <li className="todoItem">
      <input type="checkbox"
        onChange={handleCheck}
        checked={isDone}
        className="itemList"
        id={id}
      />
      <label value={name} className="labelContent">{name}</label>
      <input id={id} className="edit" defaultValue={name} type="text" />
      <button className="remove" id={id}></button>
    </li>
  )
}

export default ToDoItem