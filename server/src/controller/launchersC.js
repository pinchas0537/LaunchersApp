import { addLauncher, deleteById, getAll, getById } from "../service/longitudeS.js"

export async function createLauncher(req, res) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        const create = await addLauncher({ city, rocketType, latitude, longitude, name, Wasitdestroyed: false })
        return res.status(201).json({ launcher: create })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function allLaunchers(req, res) {
    try {
        const launchers = await getAll()
        return res.json({ launchers })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function getLauncherById(req, res) {
    try {
        const { id } = req.params
        const launcher = await getById(id)
        return res.json({ launcher })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function deleteLauncher(req, res) {
    try {
        const { id } = req.params
        const launcherDeleted = await deleteById(id)
        return res.json({ launcherDeleted })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}