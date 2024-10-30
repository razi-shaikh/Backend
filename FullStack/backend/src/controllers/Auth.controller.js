import { createCart } from "../utils/Cart.util.js";
import { responseStructure } from "../utils/Response.util.js";
import { generateToken } from "../utils/jwtProvider.util.js";
import { createUser, getUserByEmail } from "../utils/User.util.js";
import bcript from 'bcrypt';

async function register(req, res) {
    try {
        const user = await createUser(req.body)
        console.log(user);
        const jwtToken = generateToken(user._id)
        console.log(jwtToken);
        // cart service
        await createCart(user)

        return res.status(200).send(
            responseStructure(200, "User regester successfully ", { jwtToken, user }, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "Unable to create a new user", error)
        )
    }
}

async function login(req, res) {
    const { password, email } = req.body
    try {
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(404).send(
                responseStructure(404, `User not found by email : ${email}`, user, "success")
            )
        }
        const isPasswordValide = await bcript.compare(password, user.password);

        if (!isPasswordValide) {
            return res.status(401).send(
                responseStructure(401, "Check your email or Password")
            )
        }

        const jwt = generateToken(user._id)

        return res.status(200).send(
            responseStructure(200, "Login successfully", jwt, "success")
        )
    } catch (error) {
        return res.status(500).send(
            responseStructure(500, "Unable to login in account", { error: error.message })
        )
    }
}

export {
    register,
    login,
}