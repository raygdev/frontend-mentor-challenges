import React from 'react'
import styles from "./Footer.module.css"

function Footer () {
  return (
    <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
    </div>
  )
}

export default Footer