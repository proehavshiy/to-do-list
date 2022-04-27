import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.css'
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/toDoSlice';

const cn = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch()

  function handleToggleAllBtn() {
    dispatch(changeStatus({
      changeAll: true
    }))
  }

  return (
    <header className="header">
      <h1>todo list</h1>
      <Button
        style="toggle-all"
        id="toggleInputAll"
        handleClick={handleToggleAllBtn}
      />
      <Input />
    </header>
  )
}

export default Header