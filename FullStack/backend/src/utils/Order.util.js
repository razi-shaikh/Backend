import { Address } from "../models/Address.modal";
import { Order } from "../models/Order.model";
import { findUserCart } from "./Cart.util";

async function createOrder(user, shippAddress) {
    let address;
    if (shippAddress._id) {
        let existAddress = await Address.findById(shippAddress._id)
        address = existAddress;
    } else {
        address = new Address(shippAddress)
        address.user = user
        await address.save()

        user.addresses.push(address)
        await user.save()
    }

    const cart = await findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItem) {
        const orderItem = new orderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userID: item.userID,
            discountedPrice: item.discountedPrice
        })

        const createdOrderItem = await orderItem.save()
        orderItem.push(createdOrderItem)
    }

    const createOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountPrice: cart.totalDiscountPrice,
        discount: cart.discount,
        totalItem: cart.totalItem,
        shippAddress: address,
    })

    const savedOrder = await createOrder.save();
    return savedOrder;
}

async function placedOrder(orderID) {
    const order = await findOrderByID(orderID);

    order.orderStatus = "PLACED";

    return await order.save();
}

async function confirmedOrders(orderID) {
    const order = await findOrderByID(orderID);

    order.orderStatus = "CONFIRMED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
}

async function shipedOrder(orderID) {
    const order = await findOrderByID(orderID);

    order.orderStatus = "SHIPED";

    return await order.save();
}

async function deliveredOrder(orderID) {
    const order = await findOrderByID(orderID);

    order.orderStatus = "DELIVERED";

    return await order.save();
}

async function canceledOrder(orderID) {
    const order = await findOrderByID(orderID);

    order.orderStatus = "CANCELED";

    return await order.save();
}

async function findOrderByID(orderID) {
    const order = await Order.findById(orderID)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress")

    return order;
}

async function usersOrderHistory(userID) {
    try {
        const orders = await Order.find({ user: userID, orderStatus: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "product" } }).lean()

        return orders;
    } catch (error) {
        throw new Error(error.message);

    }
}

async function getAllOrders() {
    return await Order.find()
        .populate({ path: "orderItems", populate: { path: "product" } }).lean()
}

async function deletedOrder(orderID) {
    const order = await findOrderByID(orderID);
    await Order.findByIdAndDelete(order._id);
}

export {
    createOrder,
    placedOrder,
    confirmedOrders,
    shipedOrder,
    deliveredOrder,
    canceledOrder,
    findOrderByID,
    usersOrderHistory,
    getAllOrders,
    deletedOrder,
}