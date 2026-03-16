export function validetLauncher(req, res, next) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (!city || !rocketType || !latitude || !longitude || !name) return res.status(400).json({ error: "One or more details are missing." })
        if(typeof city !=="string" || typeof rocketType !=="string" || typeof name !== "string" || typeof latitude !== "number" || typeof longitude !== "number"){
            return res.status(400).json({error:"One or more of the individuals are not twins."})
        }
        if(city.trim() === "" || rocketType.trim() === "" || name.trim() === "") return res.status(400).json({error:"One or more of the details are incorrect or empty."})
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}