import { findUserCart } from "../utils/Cart.util";
import { responseStructure } from "../utils/Response.util";

async function findUserCarts(req, res) {
    const user = req.user;
    try {
        const cart = await findUserCart(user._id)

        return res.status(200).send(
            responseStructure(200, "findUserCar", cart, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "findUserCar", error.message)
        )
    }
}

async function addItemToCart(req, res) {
    const user = req.user;
    try {
        const cartItem = await addCartItem(user._id, req.body)

        return res.status(200).send(
            responseStructure(200, "findUserCar", cartItem, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "findUserCar", error.message)
        )
    }
}

export {
    findUserCarts,
    addItemToCart,
}