import React from 'react'
import classNames from 'classnames/bind'
import styles from './Filters.module.css'
import Button from '../../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../../../redux/slices/toDoSlice';
import { displayAll, displayActive, displayCompleted } from '../../../redux/slices/toDoSlice';
import { setFilterStatus } from '../../../redux/slices/filterSlice';
const cn = classNames.bind(styles);

function Filters() {
  const dispatch = useDispatch()
  const filterStatus = useSelector(state => state.toDoFilter.currentStatus)

  const FILTERSTATUS_ALL = 'all'
  const FILTERSTATUS_ACTIVE = 'active'
  const FILTERSTATUS_COMPLETED = 'completed'


  const handleShowAll = () => {
    dispatch(displayAll())
    dispatch(setFilterStatus(FILTERSTATUS_ALL))
  }
  const handleShowActive = () => {
    dispatch(displayActive())
    dispatch(setFilterStatus(FILTERSTATUS_ACTIVE))
  }
  const handleShowCompleted = () => {
    dispatch(displayCompleted())
    dispatch(setFilterStatus(FILTERSTATUS_COMPLETED))
  }
  const handleDeleteAll = () => dispatch(deleteToDo({ deleteAll: true }))

  return (
    <ul className="filters">
      <li>
        <Button
          id="allWorks"
          text="All"
          isSelected={filterStatus === FILTERSTATUS_ALL}
          handleClick={handleShowAll}
        />
      </li>
      <li>
        <Button
          id="activedItems"
          text="Active"
          isSelected={filterStatus === FILTERSTATUS_ACTIVE}
          handleClick={handleShowActive}
        />
      </li>
      <li>
        <Button
          id="completedTodos"
          text="Completed"
          isSelected={filterStatus === FILTERSTATUS_COMPLETED}
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