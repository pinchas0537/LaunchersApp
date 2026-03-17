import { config } from "dotenv";
import { verifyToken } from "../service/token.js";
config()
export function validToken(req, res, next) {
    try {
        const token = req.headers.authorization
        if(!token) return res.status(400).json({error: "The token is missing or invalid."})
        const verify = verifyToken(token, process.env.SECRET_JWT)
        if (!verify) return res.status(401).json({ error: "no my token." })
        next()
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}