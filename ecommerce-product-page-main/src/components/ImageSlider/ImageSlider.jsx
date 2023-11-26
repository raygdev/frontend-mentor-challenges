import React, { useState } from "react"
import styles from "./ImageSlider.module.css"
import nextIcon from "../../images/icon-next.svg"
import previousIcon from "../../images/icon-previous.svg"

function ImageSlider({ images, className }) {
  const [currentImage, setCurrentImage] = useState(0)
  const MAX_FORWARD = images.length - 1
  const MIN_BACK = 0
  function forward() {
    currentImage === MAX_FORWARD
      ? setCurrentImage(MIN_BACK)
      : setCurrentImage(prevImage => prevImage + 1)
  }

  function backward() {
    currentImage === MIN_BACK
      ? setCurrentImage(MAX_FORWARD)
      : setCurrentImage(prevImage => prevImage - 1)
  }

  return (
    <div className={styles.image__slider__wrapper}>
      <div className={styles.buttons__wrapper}>
        <button
          onClick={backward}
          className={styles.btn}
          aria-label="previous image"
        >
          <img aria-hidden={true} src={previousIcon} alt="" />
        </button>
        <button
          onClick={forward}
          className={styles.btn}
          aria-label="next image"
        >
          <img aria-hidden={true} src={nextIcon} alt="" />
        </button>
      </div>
      {images.map((image, i) => {
        return (
          <img
            aria-hidden={i !== currentImage}
            className={i === currentImage ? styles.show : styles.hide}
            key={i}
            src={image[0]}
            alt="product image"
          />
        )
      })}
    </div>
  )
}

export default ImageSlider
