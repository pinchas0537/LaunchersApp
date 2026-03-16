import { insertOne, deleteOne, findAll, findById, findByQuery } from "../DAL/launchers.js";

export async function addLauncher(data = {}) {
    try {
        const add = await insertOne(data)
        return add
    } catch (error) {
        throw error
    }
}

export async function getAll() {
    try {
        const find = await findAll()
        return find
    } catch (error) {
        throw error
    }
}

export async function getById(id) {
    try {
        const result = await findById(id)
        return result
    } catch (error) {
        throw error
    }
}

export async function getByQuery(queryParams,query) {
    try {
        const find = await findByQuery(queryParams,query)
        return find
    } catch (error) {
        throw error
    }
}

export async function deleteById(id) {
    try {
        const successDelete = await deleteOne(id)
        return successDelete
    } catch (error) {
        throw error
    }
}