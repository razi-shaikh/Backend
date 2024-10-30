import { CartItem } from "../models/CartItem.modal"
import { findUserByID } from "./User.util"

async function updateCartItem(userID, cartItemID, cartItemData) {
    try {
        const item = await findCartItemById(cartItemID)
        if (!item) {
            throw new Error("Cart item not found. ", cartItemID)
        }

        const user = await findUserByID(item.userID)
        if (!user) {
            throw new Error("Cart item not found. ", userID)
        }

        if (user._id.toString() === userID.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            const updatedCartItem = await item.save();
            return updateCartItem;
        } else {
            throw new Error("You can't update this cart", userID)
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

async function removeCartItem(userID, cartItemID) {
    const cartItem = await findCartItemById(cartItemID)
    const user = await findUserByID(item.userID)

    if (user._id.toString() === cartItem.userID.toString()) {
        await CartItem.findByIdAndDelete(cartItemID)
    } else {
        throw new Error("Can't remove item")
    }
}

async function findCartItemById(cartItemID) {
    const cartItem = await CartItem.findById(cartItemID)
    if (cartItem) {
        return cartItem;
    } else {
        throw new Error("Cart item not found", cartItem);
    }
}

export {
    updateCartItem,
    removeCartItem,
    findCartItemById,
}