import { addLauncher, deleteById, getAll, getById, getByQuery } from "../service/longitudeS.js"

export async function createLauncher(req, res) {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        const create = await addLauncher({ city, rocketType, latitude, longitude, name })
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

export async function getLauncherByQuery(req, res) {
    try {
        const { queryParams, query } = req.query
        const launchers = await getByQuery(queryParams, query)
        return req.json({ launchers })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function deleteLauncher(req,res) {
    try {
        const {id} = req.params
        const launcherDeleted = await deleteById(id)
        return res.json({launcherDeleted})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}