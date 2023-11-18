import image1 from "./images/image-product-1.jpg"
import image1Thumb from "./images/image-product-1-thumbnail.jpg"
import image2 from "./images/image-product-2.jpg"
import image2Thumb from "./images/image-product-2-thumbnail.jpg"
import image3 from "./images/image-product-3.jpg"
import image3Thumb from "./images/image-product-3-thumbnail.jpg"
import image4 from "./images/image-product-4.jpg"
import image4Thumb from "./images/image-product-4-thumbnail.jpg"

export const sneakerData = {
    companyName: "Sneaker Company",
    special: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    regularPrice: '250.00',
    discount: 50,
    totalCost: '125.00',
    images: [
        [image1, image1Thumb],
        [image2, image2Thumb],
        [image3, image3Thumb],
        [image4, image4Thumb],
    ]
}