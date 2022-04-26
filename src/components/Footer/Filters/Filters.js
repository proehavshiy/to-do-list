import React from 'react'
import classNames from 'classnames/bind'
import styles from './Filters.module.css'
import Button from '../../Button/Button';
const cn = classNames.bind(styles);

function Filters() {
  return (
    <ul className="filters">
      <li>
        <Button
          id="allWorks"
          text="All"
          isSelected
          handleClick={() => { }}
        />
      </li>
      <li>
        <Button
          id="activedItems"
          text="Active"
          handleClick={() => { }}
        />
      </li>
      <li>
        <Button
          id="completedTodos"
          text="Completed"
          handleClick={() => { }}
        />
      </li>
      <li>
        <Button
          id="btnClear"
          text="Clear completed"
        />
      </li>
    </ul>
  )
}

export default Filters