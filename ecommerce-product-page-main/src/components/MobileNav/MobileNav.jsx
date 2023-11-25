import React from "react"
import closeIcon from "../../images/icon-close.svg"
import styles from "./MobileNav.module.css"

function MobileNav(props) {
  const index = props.close ? -1 : 0
  return (
    <div
      id="navigation"
      aria-hidden={props.close}
      className={`${styles.nav__wrapper} ${
        props.close ? styles.hide : styles.show
      }`}
    >
      <nav aria-hidden={props.close} className={`${styles.nav} mobile `}>
        <button onClick={props.toggleClose}>
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
