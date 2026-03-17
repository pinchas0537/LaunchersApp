import { config } from "dotenv"
import { insertUser, updateUser, deleteUser, findOne, getAll } from "../DAL/authD.js"
import { signToken } from "./token.js"
config()
export async function addUser(user = {}) {
    try {
        const add = await insertUser(user)
        return add.insertedId.toString()
    } catch (error) {
        throw error
    }
}

export async function editUser(user = {}) {
    try {
        const edit = await updateUser(user)
        return edit
    } catch (error) {
        throw error
    }
}

export async function userDelete(id) {
    try {
        const delUser = await deleteUser(id)
        return delUser
    } catch (error) {
        throw error
    }
}

export async function getUserLogin(user = {}) {
    try {
        const findUser = await findOne(user)
        const token = signToken({ username: findUser.username, user_type: findUser.user_type }, process.env.SECRET_JWT)
        return { findUser, token }
    } catch (error) {
        throw error
    }
}

export async function getAllUsers() {
    try {
        const users = await getAll()
        return users
    } catch (error) {
        throw error
    }
}

export async function getUser(user = {}) {
    try {
        const findUser = await findOne(us)
        return findUser
    } catch (error) {
        throw error
    }
}