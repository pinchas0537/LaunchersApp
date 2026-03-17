import jwt from "jsonwebtoken"

export function signToken(payload, secretJWT) {
    try {
        const token = jwt.sign(payload, secretJWT)
        return token
    } catch (error) {
        throw error
    }
}

export function verifyToken(token, secretJWT) {
    try {
        const payload = jwt.verify(token, secretJWT)
        return payload
    } catch (error) {
        throw error
    }
}