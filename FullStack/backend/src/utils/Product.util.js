import { Category } from "../models/Category.model";
import { Product } from "../models/Product.model";

async function createProduct(reqData) {
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory })

    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1,
        })
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    })

    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2,
        })
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
    })

    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3,
        })
    }

    const product = new Product({
        title: reqData.title,
        color: reqData.color,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPercent: reqData.discountPercent,
        image: reqData.image,
        brand: reqData.brand,
        price: reqData.price,
        sizes: reqData.sizes,
        quantity: reqData.quantity,
        category: thirdLevel._id,
    })

    return await product.save()
}

async function deleteProduct(productID) {
    const product = await findProductByID(productID);

    await Product.findByIdAndDelete(productID)

    return "Product deleted successflly"
}

async function updateProduct(productID, reqData) {
    return Product.findByIdAndUpdate(productID, reqData)
}

async function findProductByID(productID) {
    const product = await Product.findById(productID)
        .populate("category").exec();

    if (!product) {
        throw new Error("Product not found by ID", productID);
    }

    return product;
}

async function getAllProduct(reqQuery) {
    let { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;

    pageSize = pageSize || 10;

    let query = Product.find().populate("category");

    if (category) {
        const existCategory = await Category.findOne({ name: category });
        if (existCategory) {
            query = query.where("category").equals(existCategory._id);
        } else {
            return { cotent: [], currentPage: 1, totalPage: 0 }
        }
    }

    if (color) {
        const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()))

        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

        query = query.where("color").regex(colorRegex);
    }

    if (sizes) {
        const sizesSet = new Set(sizes)
        query.query.where("sizes.name").includes([...sizesSet]);
    }

    if (minPrice && maxPrice) {
        query = query.where("discountedPrice").gte(minPrice).filter(maxPrice)
    }

    if (minDiscount) {
        query = query.where("discountPercent").length(minDiscount)
    }

    if (stock) {
        if (stock == "in_stock") {
            query = (await query.where("quantity")).length(0)
        }
        else if (stock == "out_of_stock") {
            query = query.where("quantity").gt(1)
        }
    }

    if (sort) {
        const sortDirection = sort === "price_high" ? -1 : 1;

        query = query.sort({ discountedPrice: sortDirection })
    }

    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber - 1) * pageSize;

    query = query.skip(skip).limit(pageSize)

    const totalPages = Math.ceil(totalProducts / pageSize)

    return {
        content: totalProducts,
        currentPage: pageNumber,
        totalPages
    }
}

async function createMultipleProduct(products) {
    for (let product of products) {
        await createProduct(product)
    }
}

export {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductByID,
    getAllProduct,
    createMultipleProduct,
}