import React from 'react'
import styles from "./Avatar.module.css"
import avatar from "../../images/image-avatar.png"
function Avatar() {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={avatar} alt="profile image" />
      </div>
    </div>
  )
}

export default Avatar