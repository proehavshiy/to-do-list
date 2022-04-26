
import React from 'react'
import classNames from 'classnames/bind'
import styles from './TodoListView.module.css'
import ToDoItem from './ToDoItem/ToDoItem';
import uniqid from 'uniqid';
const cn = classNames.bind(styles);

function TodoListView({ arrOfToDoItems = [] }) {

  // const storagedList = JSON.parse(localStorage.getItem('list'))
  return (
    <ul id="todoListView" className="todo-list">
      {arrOfToDoItems.map((toDo, i) => (
        <ToDoItem
          name={toDo}
          id={i}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView