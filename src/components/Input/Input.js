
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.css'
const cn = classNames.bind(styles);

function Input() {
  return (
    <input id="newTodo" className="new-todo" placeholder="What needs to be done?" />
  )
}

export default Input