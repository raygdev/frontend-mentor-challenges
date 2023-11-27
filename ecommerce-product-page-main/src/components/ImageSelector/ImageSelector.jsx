import React, { useState } from "react"
import styles from "./ImageSelector.module.css"

function ImageSelector({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0][0])
  const [thumbnailIndex, setThumbnailIndex] = useState(0)

  function handleSetThumbnailIndexAndImage(index) {
    setThumbnailIndex(index)
    setCurrentImage(images[index][0])
  }

  function handleOpenModal() {
    //do something here
    console.log("clicked")
  }
  return (
    <div>
      <button
        onClick={handleOpenModal}
        aria-controls="product-image-modal"
        aria-expanded={false /**for now */}
        aria-label="open modal"
        className={styles.modal__btn}
      >
        <img id="product-image" className={styles.main__image} src={currentImage} alt="product image" />
      </button>
      <div className={styles.thumbnail__wrapper}>
        {images.map((image, i) => {
          return (
            <button
              aria-controls="product-image"
              aria-label="change image"
              onClick={() => handleSetThumbnailIndexAndImage(i)}
              className={
                thumbnailIndex === i ? styles.active : styles.regular
              }
            >
              <img
                src={image[1]}
                alt="product thumbnail"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSelector
