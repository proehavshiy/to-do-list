import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.css'
import Button from '../Button/Button';
import Input from '../Input/Input';

const cn = classNames.bind(styles);

function Header() {
  return (
    <header className="header">
      <h1>todo list</h1>
      <Button
        style="toggle-all"
        id="toggleInputAll"
        handleClick={() => { }}
      />
      <Input
        onSubmit={(e) => {
          // setArrOfToDoItems(() => {
          //   return [...arrOfToDoItems, e.target.children[0].value]
          // })
        }
        }
      />
    </header>
  )
}

export default Header