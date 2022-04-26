
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.css'

const cn = classNames.bind(styles);

function Input({ onSubmit }) {
  return (
    <form name="form" noValidate autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
    >
      <input id="newTodo" className="new-todo" placeholder="What needs to be done?" />
    </form>
  )
}

export default Input