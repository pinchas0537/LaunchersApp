export function validetLauncher(req, res, next) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (!city || !rocketType || !latitude || !longitude || !name) return res.status(400).json({ error: "One or more details are missing." })
        if (typeof city !== "string" || typeof rocketType !== "string" || typeof name !== "string" || typeof latitude !== "string" || typeof longitude !== "string") {
            return res.status(400).json({ error: "One or more of the individuals are not twins." })
        }
        if (city.trim() === "" || rocketType.trim() === "" || name.trim() === "") return res.status(400).json({ error: "One or more of the details are incorrect or empty." })
        const letters = /^[a-zA-Zא-ת0-9\s]+$/
        const number = /^[0-9]+$/
        if (!letters.test(city) || !letters.test(rocketType) || !letters.test(name) ) {
            return res.status(400).json({ error: "The City and RocketType and name fields can only be letters." })
        }
        if(!number.test(latitude) || !number.test(longitude)) return res.status(400).json({ error: "The longitude and latitude fields can only be number." })
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}