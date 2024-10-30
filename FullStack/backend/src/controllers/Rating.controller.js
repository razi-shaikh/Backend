import { createRating, getProductRating } from "../utils/Rating.util.js";
import { responseStructure } from "../utils/Response.util.js";

async function createRatings(req, res) {
    const user = req.user;
    try {
        const review = await createRating(req.body, user)
        return res.status(201).send(
            responseStructure(201, "createRatings", review, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "createRatings", error.message)
        )
    }
}

async function getProductRatings(req, res) {
    const productID = req.params.productID;
    try {
        const review = await getProductRating(productID)
        return res.status(201).send(
            responseStructure(201, "getProductRatings", review, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "createRatings", error.message)
        )
    }
}

export {
    createRatings,
    getProductRatings,
}