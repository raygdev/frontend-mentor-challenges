import React, { useEffect, useState, useRef } from "react"
import styles from "./Header.module.css"
import MobileNav from "../MobileNav/MobileNav"
import menu from "../../images/icon-menu.svg"
import logo from "../../images/logo.svg"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Avatar from "../Avatar/Avatar"
import useMediaQuery from "../../hooks/useMediaQuery"

function Header(props) {
  const [close, setClose] = useState(true)
  const [isMobile] = useMediaQuery()
  const buttonRef = useRef(null)

  useEffect(() => {
    isMobile ? setClose(true) : setClose(false)
  }, [isMobile])

  function toggleClose() {
    setClose(prevClose => {
      if (!prevClose) {
        buttonRef.current.focus()
        return !prevClose
      }

      return !prevClose
    })
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo__wrapper}>
        <button
          aria-expanded={!close}
          aria-controls="navigation"
          onClick={toggleClose}
          className={styles.menu__button}
          aria-label="open menu"
          ref={buttonRef}
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
