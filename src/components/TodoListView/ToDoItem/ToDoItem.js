import React from 'react'
import classNames from 'classnames/bind'
import styles from './ToDoItem.module.css'
const cn = classNames.bind(styles);

function ToDoItem({ name, id }) {
  return (
    <li className="todoItem">
      <input type="checkbox" className="itemList" id={id} />
      <label value={name} className="labelContent">{name}</label>
      <input id={id} className="edit" defaultValue={name} type="text" />
      <button className="remove" id={id}></button>
    </li>
  )
}

export default ToDoItem