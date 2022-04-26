
import React from 'react'
import classNames from 'classnames/bind'
import styles from './TodoListView.module.css'
import ToDoItem from './ToDoItem/ToDoItem';
const cn = classNames.bind(styles);

function TodoListView() {
  return (
    <ul id="todoListView" className="todo-list">
      <ToDoItem
        name={'todo 1'}
        id={1} />
    </ul>
  )
}

export default TodoListView