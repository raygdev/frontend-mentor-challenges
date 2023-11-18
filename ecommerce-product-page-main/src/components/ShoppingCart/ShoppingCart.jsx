import React from 'react'
import styles from "./ShoppingCart.module.css"
import cart from '../../images/icon-cart.svg'

function ShoppingCart(props) {
    const numItems = 1
  return (
    <div className={styles.cart}>
        <img className={styles.cart__icon} src={cart} alt="cart icon" />
        <div className={styles.cart__badge}>{numItems}</div>
    </div>
  )
}

export default ShoppingCart