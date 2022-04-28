
import React from 'react'
import classNames from 'classnames/bind'
import styles from './TodoListView.module.css'
import ToDoItem from './ToDoItem/ToDoItem';
import uniqid from 'uniqid';

import { useSelector, useDispatch } from 'react-redux';

const cn = classNames.bind(styles);

function TodoListView() {
  const dispatch = useDispatch()
  // get arrOfToDos from redux store
  const arrayOfToDoItems = useSelector(state => state.toDoArr)

  const state = useSelector(state => state)
  console.log('state:', state);

  return (
    <ul id="todoListView" className="todo-list">
      {arrayOfToDoItems.map((toDo) => (
        <ToDoItem
          name={toDo.value}
          id={toDo.id}
          isDisplay={toDo.isDisplay}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView