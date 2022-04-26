import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.css'
import Counter from './Counter/Counter';
import Filters from './Filters/Filters';
const cn = classNames.bind(styles);

function Footer() {
  return (
    <footer className="footer">
      <Counter />
      <Filters />
    </footer>
  )
}

export default Footer