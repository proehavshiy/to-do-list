import React from 'react'
import classNames from 'classnames/bind'
import styles from './Counter.module.css'
import { useSelector } from 'react-redux';
const cn = classNames.bind(styles);

function Counter() {
  const toDosLeft = useSelector((state) => state.toDoArr.reduce((acc, curr) => {
    curr.isDone === false && acc++
    return acc
  }, 0))

  return (
    <span className="todo-count">
      <strong id="todoCount">
        {toDosLeft}
      </strong> item left
    </span>
  )
}

export default Counter