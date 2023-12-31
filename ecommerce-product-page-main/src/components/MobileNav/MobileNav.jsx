import React, { useEffect, useRef, useState } from "react"
import closeIcon from "../../images/icon-close.svg"
import styles from "./MobileNav.module.css"
import { useFocusNav } from "../../hooks/useFocusNav"


function MobileNav(props) {
  const navRef = useRef(null)
  /**
   * useFocusNav is not really being used here. It is only
   * meant to clean up the large useEffect that is attaching
   * and removing event listeners. Suggestions?
   */
  const focus = useFocusNav(navRef, props.close)
  const index = props.close ? -1 : 0
  return (
    <div
      id="navigation"
      aria-hidden={props.close}
      className={`${styles.nav__wrapper} ${
        props.close ? styles.hide : styles.show
      }`}
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
