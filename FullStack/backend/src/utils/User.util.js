import { User } from "../models/User.modal.js"
import bcrypt from 'bcrypt'
import { getUseridFromToken } from "./jwtProvider.util.js"

async function createUser(userData) {
    try {
        let { firstName, lastName, email, password } = userData
        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            return new Error(`User already exist with email : ${email}`)
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
        })

        return user

    } catch (error) {
        throw new Error("Unable to create a new user", error)
    }
}

async function findUserByID(userID) {
    try {
        const user = await User.findById(userID)
        // .populate("address");
        if (!user) {
            throw new Error("user not found by userID", user)
        }

        return user

    } catch (error) {
        throw new Error("Unable to find user by userID", error.message)
    }
}

async function getUserByEmail(email) {
    try {
        const user = User.findOne({ email })
        if (!user) {
            throw new Error("user not found by email", user)
        }

        return user
    } catch (error) {
        throw new Error("Unable to find user by email", error)
    }
}

async function getUserProfileByToken(token) {
    try {
        const userID = await getUseridFromToken(token)
        const user = await findUserByID(userID)
        // console.log(user);

        if (!user) {
            throw new Error("user not found by token", user)
        }

        return user

    } catch (error) {
        throw new Error("Unable to find user by token", error)
    }
}

async function getAllUsers() {
    try {
        const users = await User.find();

        if (!users) {
            throw new Error("Unable to get all Users", users)
        }

        return users
    } catch (error) {
        throw new Error("Unable to find all Users", error.message)
    }
}

export {
    createUser,
    findUserByID,
    getUserByEmail,
    getUserProfileByToken,
    getAllUsers,
}