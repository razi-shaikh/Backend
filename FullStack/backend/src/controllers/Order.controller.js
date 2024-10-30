import { createOrder, findOrderByID, usersOrderHistory } from "../utils/order.util";

async function createdOrder(req, res) {
    const user = req.user;
    try {
        const createdOrder = await createOrder(user, req.body)
        return res.status(201).send(
            responseStructure(201, "createdOrder", createdOrder, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "createdOrder", error.message)
        )
    }
}

async function findOrderByIDs(req, res) {
    const user = req.user;
    try {
        const findOrder = await findOrderByID(req.params.id)
        return res.status(201).send(
            responseStructure(201, "findOrderByIDs", findOrder, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "findOrderByIDs", error.message)
        )
    }
}

async function orderHistory(req, res) {
    const user = req.user;
    try {
        const orderHistory = await usersOrderHistory(user._id);
        return res.status(201).send(
            responseStructure(201, "orderHistory", orderHistory, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "orderHistory", error.message)
        )
    }
}

export {
    createdOrder,
    findOrderByIDs,
    orderHistory,
}