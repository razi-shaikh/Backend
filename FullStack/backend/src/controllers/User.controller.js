import { responseStructure } from "../utils/Response.util.js";
import { getAllUsers, getUserProfileByToken } from "../utils/User.util.js";

async function getUserByToken(req, res) {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        if (!jwt) {
            return res.status(404).send(
                responseStructure(404, "token not found", jwt)
            )
        }
        const user = await getUserProfileByToken(jwt)

        return res.status(200).send(
            responseStructure(200, "user found by token", user, "success")
        )

    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "user not found by token", error.message)
        )
    }
}

async function getAllUser(req, res) {
    try {
        const users = await getAllUsers()

        return res.status(200).send(
            responseStructure(200, "All user are found", users, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "user not found by token", error)
        )
    }
}

export {
    getUserByToken,
    getAllUser,
}