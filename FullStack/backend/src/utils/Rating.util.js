import { Rating } from "../models/Rating.model";
import { findProductByID } from "./Product.util";

async function createRating(req, user) {
    const product = await findProductByID(req.productID)

    const rating = new Rating({
        product: product.productID,
        user: user._id,
        rating: req.rating,
        createdAt: new Date(),
    })

    return await rating.save()
}

async function getProductRating(productID) {
    return await Rating.find({ product: productID })
}

export {
    createRating,
    getProductRating,
}