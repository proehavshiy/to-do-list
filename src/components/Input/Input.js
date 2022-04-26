
import React, { createRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { addNewToDo } from '../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function Input() {
  const dispatch = useDispatch()
  const inputRef = createRef(null)

  return (
    <form name="form" noValidate autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault()
        // const newToDoPayload = e.target.children[0].value
        const newToDoPayload = inputRef.current.value
        // update store
        dispatch(addNewToDo(newToDoPayload))
        // clear input at the end
        inputRef.current.value = ''
      }}
    >
      <input id="newTodo" className="new-todo" placeholder="What needs to be done?" ref={inputRef} />
    </form>
  )
}

export default Input