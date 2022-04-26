import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.css'
const cn = classNames.bind(styles);

function Button({ style, id, type = "button", text, isSelected = false, handleClick }) {
  return (
    <button id={id} className={cn(style, { selected: isSelected })} type={type} onClick={handleClick}>{text}</button>
  )
}

export default Button