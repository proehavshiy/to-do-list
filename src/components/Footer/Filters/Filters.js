import React from 'react';
// styles
import styles from './Filters.module.css';
import classNames from 'classnames/bind';
// components
import Button from '../../Button/Button';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../../../redux/slices/toDoSlice/toDoSlice';
import { displayAll, displayActive, displayCompleted } from '../../../redux/slices/toDoSlice/toDoSlice';
import { setFilterStatus } from '../../../redux/slices/filterSlice/filterSlice';
// constants
import {
  FILTERSTATUS_ALL, FILTERSTATUS_ACTIVE, FILTERSTATUS_COMPLETED,
  BUTTON_FILTER_ALL, BUTTON_FILTER_ACTIVE, BUTTON_FILTER_COMPLETED, BUTTON_FILTER_CLEARALL,
  LSNAME_FILTER
} from '../../../constants/constants';

const cn = classNames.bind(styles);

function Filters() {
  const dispatch = useDispatch()
  const filterStatus = useSelector(state => state[LSNAME_FILTER].currentStatus)

  const handleDisplayAll = () => {
    dispatch(displayAll())
    dispatch(setFilterStatus(FILTERSTATUS_ALL))
  }
  const handleDisplayActive = () => {
    dispatch(displayActive())
    dispatch(setFilterStatus(FILTERSTATUS_ACTIVE))
  }
  const handleDisplayCompleted = () => {
    dispatch(displayCompleted())
    dispatch(setFilterStatus(FILTERSTATUS_COMPLETED))
  }
  const handleDeleteAll = () => dispatch(deleteToDo({ deleteCompleted: true }))

  return (
    <ul className={cn('filters')}>
      <li data-testid='all'>
        <Button
          text={BUTTON_FILTER_ALL}
          isSelected={filterStatus === FILTERSTATUS_ALL}
          handleClick={handleDisplayAll}

        />
      </li>
      <li data-testid='active'>
        <Button
          text={BUTTON_FILTER_ACTIVE}
          isSelected={filterStatus === FILTERSTATUS_ACTIVE}
          handleClick={handleDisplayActive}
        />
      </li>
      <li data-testid='completed'>
        <Button
          text={BUTTON_FILTER_COMPLETED}
          isSelected={filterStatus === FILTERSTATUS_COMPLETED}
          handleClick={handleDisplayCompleted}
        />
      </li>
      <li data-testid='deleteCompleted'>
        <Button
          text={BUTTON_FILTER_CLEARALL}
          handleClick={handleDeleteAll}
        />
      </li>
    </ul>
  )
}

export default Filters;