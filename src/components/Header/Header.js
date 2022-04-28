import React from 'react';
// styles
import styles from './Header.module.css';
import classNames from 'classnames/bind';
// components
import Button from '../Button/Button';
import Input from '../Input/Input';
// redux
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch()

  function handleToggleAllBtn() {
    dispatch(changeStatus({ changeAll: true }))
  }

  return (
    <header className={cn('header')}>
      <h1>todo list</h1>
      <Button
        style='toggle-all'
        handleClick={handleToggleAllBtn}
      />
      <Input />
    </header>
  )
}

export default Header