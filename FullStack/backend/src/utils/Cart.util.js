import { Cart } from "../models/Cart.modal.js";
import { CartItem } from "../models/CartItem.modal.js";
import { Product } from "../models/Product.model.js";

async function createCart(user) {
    try {
        const cart = new Cart({ user })

        const createdCart = await cart.save();

        return createdCart;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function findUserCart(userID) {
    try {
        const cart = await Cart.findOne({ user: userID })
        const cartItem = await CartItem.find({ cart: cart._id })
            .populate("product")
        cart.cartItem = cartItem;

        let totalPrice = 0, totalItem = 0, totalDiscountPrice = 0;

        for (const item of cart.cartItem) {
            totalPrice += item.price;
            totalDiscountPrice += discountedPrice;
            totalItem += item.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.totalDiscountPrice = totalPrice - totalDiscountPrice;

        return cart
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addCartItem(userID, req) {
    try {
        const cart = await Cart.findOne({ user: userID })
        const product = await Product.findById(req.productID)

        const isCartPresent = await CartItem.findOne({ cart: cart._id, product: _id, userID })

        if (!isCartPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                userID,
                quantity: 1,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            })
            const createCartItem = await cartItem.save()
            cart.cartItem.push(createCartItem)
            await cart.save()

            return "Item added to cart."
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export { createCart, findUserCart, addCartItem }