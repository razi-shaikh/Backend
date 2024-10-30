import { canceledOrder, confirmedOrders, deletedOrder, deliveredOrder, getAllOrders, shipedOrder } from "../utils/order.util";
import { responseStructure } from "../utils/Response.util";

async function getAllOrder(req, res) {
    try {
        const orders = await getAllOrders()
        return res.status(200).send(
            responseStructure(200, "getAllOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "getAllOrder", error.message)
        )
    }
}

async function confirmOrder(req, res) {
    const orderID = req.params.orderID;
    try {
        const orders = await confirmedOrders(orderID)
        return res.status(200).send(
            responseStructure(200, "confirmedOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "confirmedOrder", error.message)
        )
    }
}

async function shippOrder(req, res) {
    const orderID = req.params.orderID;
    try {
        const orders = await shipedOrder(orderID)
        return res.status(200).send(
            responseStructure(200, "shippOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "shippOrder", error.message)
        )
    }
}

async function deliverOrder(req, res) {
    const orderID = req.params.orderID;
    try {
        const orders = await deliveredOrder(orderID)
        return res.status(200).send(
            responseStructure(200, "deliverOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "deliverOrder", error.message)
        )
    }
}

async function cancelOrder(req, res) {
    const orderID = req.params.orderID;
    try {
        const orders = await canceledOrder(orderID)
        return res.status(200).send(
            responseStructure(200, "cancelOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "cancelOrder", error.message)
        )
    }
}

async function deleteOrder(req, res) {
    const orderID = req.params.orderID;
    try {
        const orders = await deletedOrder(orderID)
        return res.status(200).send(
            responseStructure(200, "deletedOrder", orders, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "deletedOrder", error.message)
        )
    }
}

export {
    getAllOrder,
    confirmOrder,
    shippOrder,
    deliverOrder,
    cancelOrder,
    deleteOrder
}