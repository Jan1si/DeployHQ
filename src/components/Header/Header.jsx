import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="https://cdn.svgporn.com/logos/deployhq.svg" alt="" />
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li><a href="/">Посты</a></li>
          <li><a href="/">Задачи</a></li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.button__login}>Войти</button>
          <button className={styles.button__signup}>Регистрация</button>
        </div>
      </div>
    </div>
  )
}

export default Header