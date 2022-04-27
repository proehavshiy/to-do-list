import React from 'react'
import classNames from 'classnames/bind'
import styles from './Counter.module.css'
import { useSelector } from 'react-redux';
const cn = classNames.bind(styles);

function Counter() {
  const amountOfToDos = useSelector((state) => state.toDoArr.length)

  return (
    <span className="todo-count">
      <strong id="todoCount">{amountOfToDos}</strong> item left</span>
  )
}

export default Counter