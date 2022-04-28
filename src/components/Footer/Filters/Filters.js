import React from 'react'
import classNames from 'classnames/bind'
import styles from './Filters.module.css'
import Button from '../../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../../../redux/slices/toDoSlice';
import { displayAll, displayActive, displayCompleted } from '../../../redux/slices/toDoSlice';
const cn = classNames.bind(styles);

function Filters() {
  const dispatch = useDispatch()
  const ArrToFilter = useSelector((state) => state.toDoArr)
  console.log('ArrToFilter:', ArrToFilter);


  const handleShowAll = () => dispatch(displayAll())
  const handleShowActive = () => dispatch(displayActive())
  const handleShowCompleted = () => dispatch(displayCompleted())
  const handleDeleteAll = () => dispatch(deleteToDo({ deleteAll: true }))

  // const handleShowAll = () => dispatch(all(ArrToFilter))
  // const handleShowActive = () => dispatch(active(ArrToFilter))
  // const handleShowCompleted = () => dispatch(completed(ArrToFilter))
  // const handleDeleteAll = () => dispatch(deleteToDo({ deleteAll: true }))

  return (
    <ul className="filters">
      <li>
        <Button
          id="allWorks"
          text="All"
          isSelected
          handleClick={handleShowAll}
        />
      </li>
      <li>
        <Button
          id="activedItems"
          text="Active"
          handleClick={handleShowActive}
        />
      </li>
      <li>
        <Button
          id="completedTodos"
          text="Completed"
          handleClick={handleShowCompleted}
        />
      </li>
      <li>
        <Button
          id="btnClear"
          text="Clear completed"
          handleClick={handleDeleteAll}
        />
      </li>
    </ul>
  )
}

export default Filters