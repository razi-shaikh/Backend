import jwt from 'jsonwebtoken'

function generateToken(userID) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ userID }, JWT_SECRET_KEY, { expiresIn: '2d', })
    return token
}

function getUseridFromToken(token) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    const decodedToken = jwt.verify(token, JWT_SECRET_KEY)

    return decodedToken.userID
}

export {
    generateToken,
    getUseridFromToken,
}