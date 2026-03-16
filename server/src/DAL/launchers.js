import { ObjectId } from "mongodb"
import { connect } from "../db/db.js"

const db = await connect()

const collection = "launchers"

export async function insertOne(data = {}) {
    try {
        const result = await db.collection(collection).insertOne(data)
        return result
    } catch (error) {
        throw error
    }
}

export async function findAll() {
    try {
        const result = await db.collection(collection).find().toArray()
        return result
    } catch (error) {
        throw error
    }
}

export async function findById(id) {
    try {
        const result = await db.collection(collection).findOne({ _id: new ObjectId(id) })
        return result
    } catch (error) {
        throw error
    }
}


export async function deleteOne(id) {
    try {
        const result = await db.collection(collection).findOneAndDelete({ _id: new ObjectId(id) })
        return result
    } catch (error) {
        throw error
    }
}