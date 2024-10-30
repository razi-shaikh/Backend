import { createReview, getProductReview } from "../utils/Review.util";
import { responseStructure } from "../utils/Response.util.js";

async function createReviews(req, res) {
    const user = req.user;
    try {
        const review = await createReview(req.body, user)
        return res.status(201).send(
            responseStructure(201, "getProductReviews", review, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "getProductReviews", error.message)
        )
    }
}

async function getProductReviews(req, res) {
    const productID = req.params.productID;
    try {
        const review = await getProductReview(productID)
        return res.status(201).send(
            responseStructure(201, "getProductReviews", review, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "getProductReviews", error.message)
        )
    }
}

export {
    createReviews,
    getProductReviews,
}