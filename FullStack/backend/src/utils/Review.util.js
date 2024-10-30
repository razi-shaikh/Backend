import { Review } from "../models/Review.model";
import { findProductByID } from "./Product.util";

async function createReview(reqData, user) {
    const product = await findProductByID(reqData.productID)

    const review = new Review({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date(),
    });

    await product.save();
    return await review.save();
}

async function getProductReview(productID) {
    const product = await findProductByID(reqData.productID);

    return await Review.find({ product: productID }).populate("user")
}

export {
    createReview,
    getAllReview,
}