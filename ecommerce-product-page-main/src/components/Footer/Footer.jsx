import React from 'react'
import styles from "./Footer.module.css"
import useMediaQuery from '../../hooks/useMediaQuery'

function Footer ({ close }) {
  const [isMobile] = useMediaQuery()
  return (
    <div inert={!close && isMobile && ""} className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
    </div>
  )
}

export default Footer