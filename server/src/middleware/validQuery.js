export function validQuery(req, res, next) {
    try {
        const { queryParams, query } = req.query
        if (!queryParams || !query) return res.status(400).json({ error: "one or more parameters are missing." })
        if (typeof queryParams !== "string" || typeof query !== "string") return res.status(400).json({ error: "One or more of the individuals are not twins." })
        if (queryParams.trim() === "" || query.trim() === "") return res.status(400).json({ error: "One or more of the details are incorrect or empty." })
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}