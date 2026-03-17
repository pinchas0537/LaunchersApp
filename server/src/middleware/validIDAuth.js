import { ObjectId } from "mongodb"

export function validIDAuth(req, res, next) {
    try {
        const { id } = req.body
        if (!id) return res.status(400).json({ error: "No ID arrived." })
        if (id !== new ObjectId(id)) return res.status(400).json({ error: "Incorrect ID" })
        next()
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}