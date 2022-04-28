
import React from 'react';
// styles
import styles from './TodoListView.module.css';
import classNames from 'classnames/bind';
// components
import ToDoItem from './ToDoItem/ToDoItem';
// redux
import { useSelector } from 'react-redux';
// other
import uniqid from 'uniqid';
// constants
import { LSNAME_TODO } from '../../constants/constants';

const cn = classNames.bind(styles);

function TodoListView() {
  // get arrOfToDos from redux store
  const arrayOfToDoItems = useSelector(state => state[LSNAME_TODO])
  return (
    <ul className={cn('todo-list')}>
      {arrayOfToDoItems.map((toDo) => (
        <ToDoItem
          toDo={toDo}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView;