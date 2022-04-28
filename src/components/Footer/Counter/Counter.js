import React from 'react';
// styles
import styles from './Counter.module.css';
import classNames from 'classnames/bind';
// redux
import { useSelector } from 'react-redux';
// constants
import { LSNAME_TODO } from '../../../constants/constants';

const cn = classNames.bind(styles);

function Counter() {
  const toDosLeft = useSelector((state) => state[LSNAME_TODO].reduce((acc, curr) => {
    curr.isDone === false && acc++
    return acc
  }, 0))

  return (
    <span className={cn('todo-count')}>
      <strong>
        {toDosLeft}
      </strong> item left
    </span>
  )
}

export default Counter;