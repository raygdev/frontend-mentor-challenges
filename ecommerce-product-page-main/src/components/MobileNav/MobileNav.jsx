import React, { useEffect, useRef, useState } from "react"
import closeIcon from "../../images/icon-close.svg"
import styles from "./MobileNav.module.css"

function MobileNav(props) {
  const navRef = useRef(null)
  const index = props.close ? -1 : 0
  function toggle(e) {
    e.key === "Escape" && !props.close && props.toggleClose()
  }
  return (
    <div
      id="navigation"
      aria-hidden={props.close}
      className={`${styles.nav__wrapper} ${
        props.close ? styles.hide : styles.show
      }`}
      onKeyDown={toggle}
    >
      <nav
        ref={navRef}
        aria-hidden={props.close}
        className={`${styles.nav} mobile `}
      >
        <button
          className={styles.close__btn}
          onClick={props.toggleClose}
          tabIndex={props.close ? -1 : 0}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <ul className={styles.navlist}>
          <li className={styles.navlist__item}>
            <a tabIndex={index} href="#">
              Collections
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a tabIndex={index} href="#">
              Men
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a tabIndex={index} href="#">
              Women
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a tabIndex={index} href="#">
              About
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a tabIndex={index} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav
