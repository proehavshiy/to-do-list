
import React from 'react'
import classNames from 'classnames/bind'
import styles from './TodoListView.module.css'
import ToDoItem from './ToDoItem/ToDoItem';
import uniqid from 'uniqid';

import { useSelector } from 'react-redux';
const cn = classNames.bind(styles);

function TodoListView() {
  // get arrOfToDos from redux store
  const arrayOfToDoItems = useSelector(state => state.toDoArr)

  return (
    <ul id="todoListView" className="todo-list">
      {arrayOfToDoItems.map((toDo, i) => (
        <ToDoItem
          name={toDo.value}
          id={i}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView