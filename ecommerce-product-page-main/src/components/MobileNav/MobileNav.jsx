import React from 'react'
import closeIcon from "../../images/icon-close.svg"
import styles from "./MobileNav.module.css"

function MobileNav(props) {
    const index = props.close ? -1 : 0
  return (
    <div aria-hidden={props.close} className={`${styles.nav__wrapper} ${props.close ? styles.hide: styles.show}`}>
        <nav aria-hidden={props.close} className={`${styles.nav} mobile `}>
            <img onClick={props.toggleClose} src={closeIcon} alt="close icon" />
            <ul className={styles.navlist}>
                <li className={styles.navlist__item}><a tabIndex={index} href="#">Collections</a></li>
                <li className={styles.navlist__item}><a tabIndex={index} href="#">Men</a></li>
                <li className={styles.navlist__item}><a tabIndex={index} href="#">Women</a></li>
                <li className={styles.navlist__item}><a tabIndex={index} href="#">About</a></li>
                <li className={styles.navlist__item}><a tabIndex={index} href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default MobileNav