import { removeCartItem, updateCartItem } from "../utils/CartItem.util";

async function updatedCartItem(req, res) {
    const user = req.user;
    try {
        const updatedCartItem = await updateCartItem(user._id, req.params, req.body)
        return res.status(200).send(
            responseStructure(200, "updatedCartItem", updatedCartItem, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "updatedCartItem", error.message)
        )
    }
}

async function removedCartItem(req, res) {
    const user = req.user;
    try {
        const removeCartItem = await removeCartItem(user._id, req.params.id)
        return res.status(200).send(
            responseStructure(200, "removedCartItem", removeCartItem, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "removedCartItem", error.message)
        )
    }
}

export {
    updatedCartItem,
    removedCartItem,
}