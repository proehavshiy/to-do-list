
import React, { createRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { addNewToDo } from '../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function Input() {
  const dispatch = useDispatch()

  const inputRef = createRef(null)
  const [inputVal, setInputVal] = useState('')

  return (
    <form name="form" noValidate autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault()
        const newToDoPayload = inputRef.current.value
        // update store
        dispatch(addNewToDo(newToDoPayload))
        // clear input at the end
        inputRef.current.value = ''
      }}
    >
      <input id="newTodo"
        className="new-todo"
        placeholder="What needs to be done?"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        ref={inputRef}
      />
    </form>
  )
}

export default Input