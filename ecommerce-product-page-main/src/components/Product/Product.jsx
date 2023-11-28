import React from "react"
import styles from "./Product.module.css"
import ImageSlider from "../ImageSlider/ImageSlider"
import useMediaQuery from "../../hooks/useMediaQuery"
import ImageSelector from "../ImageSelector/ImageSelector"

function Product({ close, ...props}) {
  const [isMobile] = useMediaQuery()
  const {
    description,
    companyName,
    special,
    regularPrice,
    discount,
    totalCost,
    images
  } = props.data
  return (
    <main className={styles.wrapper}>
      <div className={styles.product__image__wrapper}>
        {isMobile && <ImageSlider images={images} />}
        {!isMobile && <ImageSelector images={images}/>}
      </div>
      <div className={styles.product__info__wrapper}>
        <h2>{special}</h2>
        <p className={styles.product__companyname}>{companyName}</p>
        <p className={styles.product__description}>{description}</p>
        <div className={styles.product__price}>
          <div className={styles.product__price__wrapper}>
            <span className={styles.product__total__cost}>${totalCost}</span>
            <span className={styles.product__discount}>{discount}%</span>
          </div>
          <span className={styles.product__regular__price}>
            ${regularPrice}
          </span>
        </div>
        <div className={styles.buttons__wrapper}>
          <div className={styles.quantity__wrapper}>
            <button
              aria-label="decrease quantity"
              className={styles.minus}
            ></button>
            <span className={styles.count}>0</span>
            <button
              aria-label="increase quantity"
              className={styles.plus}
            ></button>
          </div>
          <button className={styles.add__to__cart}>Add To Cart</button>
        </div>
      </div>
    </main>
  )
}

export default Product
