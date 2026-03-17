import axios from "axios";

const url = "http://localhost:5050/api/auth"

export async function addUser(user = {}, token) {
    try {
        const add = await axios.post(url + "/register/create", user, {
            headers: {
                Authorization: token
            }
        })
        return add.data
    } catch (error) {
        throw error
    }
}

export async function updateUser(user = {}, token) {
    try {
        const update = await axios.put(url + "/register/update", user, {
            headers: {
                Authorization: token
            }
        })
        return update.data
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id, token) {
    try {
        const userDelete = await axios.delete(url + `/register/delete/${id}`, {
            headers: {
                Authorization: token
            }
        })
        return userDelete.data
    } catch (error) {
        throw error
    }
}

export async function login(loginUser = {}) {
    try {
        const userLogin = await axios.post(url + "/login", loginUser)
        return userLogin
    } catch (error) {
        throw error
    }
}

export async function getMe(token) {
    try {
        const user = await axios.get(url + "/getUser", {
            headers: {
                Authorization: token
            }
        })
        return user.data
    } catch (error) {
        throw error
    }
}

export async function allUsers(token) {
    try {
        const users = await axios.get(url + "/register/getUsers", {
            headers: {
                Authorization: token
            }
        })
        return users.data
    } catch (error) {
        throw error
    }
}