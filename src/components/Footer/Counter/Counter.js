import React from 'react'
import classNames from 'classnames/bind'
import styles from './Counter.module.css'
const cn = classNames.bind(styles);

function Counter() {
  return (
    <span className="todo-count">
      <strong id="todoCount">0</strong>
      item left
    </span>
  )
}

export default Counter