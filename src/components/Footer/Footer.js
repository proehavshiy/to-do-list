import React from 'react';
// styles
import styles from './Footer.module.css';
import classNames from 'classnames/bind';
// components
import Counter from './Counter/Counter';
import Filters from './Filters/Filters';

const cn = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cn('footer')}>
      <Counter />
      <Filters />
    </footer>
  )
}

export default Footer;