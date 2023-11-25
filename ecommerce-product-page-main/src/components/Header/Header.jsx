import React, { useState } from 'react'
import styles from "./Header.module.css"
import MobileNav from "../MobileNav/MobileNav"
import menu from "../../images/icon-menu.svg"
import logo from "../../images/logo.svg"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Avatar from "../Avatar/Avatar"

function Header(props) {
  const [close, setClose] = useState(true)

  function toggleClose() {
    setClose(prevClose => !prevClose)
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <button
          onClick={toggleClose}
          className={styles.menu__button}
          aria-label="open menu"
        >
          <img src={menu} className={styles.menu__icon} alt="open menu" />
        </button>
        <img src={logo} alt="sneakers logo" />
      </div>
      <MobileNav close={close} toggleClose={toggleClose} />
      <div className={styles.wrapper}>
        <ShoppingCart />
        <Avatar />
      </div>
    </header>
  )
}

export default Header
