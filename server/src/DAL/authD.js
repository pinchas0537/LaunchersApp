import { ObjectId } from "mongodb"
import { connect } from "../db/db.js"

const db = await connect()

const collection = "users"

export async function insertUser(user = {}) {
    try {
        const successInsert = await db.collection(collection).insertOne(user)
        return successInsert
    } catch (error) {
        throw error
    }
}

export async function updateUser(user = {}) {
    try {
        const successUpdate = await db.collection(collection).updateOne({ _id: new ObjectId(user.id) }, { $set: { user } })
        return successUpdate
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id) {
    try {
        const userDelete = await db.collection(collection).findOneAndDelete({ _id: new ObjectId(id) })
        return userDelete
    } catch (error) {
        throw error
    }
}

export async function findOne(user = {}) {
    try {
        const findUser = await db.collection(collection).findOneAndUpdate({ $and: [{ username: user.username }, { password: user.password }] }, { last_login: new Date().toISOString() })
        return findUser
    } catch (error) {
        throw error
    }
}

export async function getAll() {
    try {
        const users = await db.collection(collection).find().toArray()
        return users
    } catch (error) {
        throw error
    }
}