import { createMultipleProduct, createProduct, deleteProduct, findProductByID, getAllProduct, updateProduct } from "../utils/Product.util";
import { responseStructure } from "../utils/Response.util.js";

async function createProducts(req, res) {
    try {
        const product = await createProduct(req.body)

        return res.status(201).send(
            responseStructure(201, "createProducts", product, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "createProducts", error.message)
        )
    }
}

async function deleteProducts(req, res) {
    const productID = req.params.id
    try {
        const product = await deleteProduct(productID)

        return res.status(201).send(
            responseStructure(201, "deleteProducts", product, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "deleteProducts", error.message)
        )
    }
}

async function updateProducts(req, res) {
    const productID = req.params.id
    try {
        const product = await updateProduct(productID, req.body);

        return res.status(201).send(
            responseStructure(201, "updateProducts", product, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "updateProducts", error.message)
        )
    }
}

async function findProductsByID(req, res) {
    const productID = req.params.id
    try {
        const product = await findProductByID(productID);

        return res.status(201).send(
            responseStructure(201, "findProductsByID", product, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "findProductsByID", error.message)
        )
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await getAllProduct(req.query);

        return res.status(201).send(
            responseStructure(201, "findProductsByID", products, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "findProductsByID", error.message)
        )
    }
}

async function createMultipleProducts(req, res) {
    try {
        const products = await createMultipleProduct(req.body);

        return res.status(201).send(
            responseStructure(201, "Products created successfully", products, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "createMultipleProducts", error.message)
        )
    }
}

export {
    createProducts,
    deleteProducts,
    updateProducts,
    findProductsByID,
    getAllProducts,
    createMultipleProducts,

}