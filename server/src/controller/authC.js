import { addUser, editUser, getUserLogin, userDelete, getAllUsers, getUser } from "../service/authS.js"

export async function create(req, res) {
    try {
        const { username, password, email, user_type } = req.body
        const createUser = await addUser({ username, password, email, user_type, last_login: null })
        return res.status(201).json({ successCreated: { id: createUser, username, password } })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}

export async function updateUser(req, res) {
    try {
        const { id, username, password, email, user_type } = req.body
        const update = await editUser({ id, username, password, email, user_type })
        return res.json({ successUpdate: update })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}

export async function loginUser(req, res) {
    try {
        const { username, password } = req.body
        const user = await getUserLogin({ username, password })
        return res.setHeader('Authorization', user.token).json({ user: user.findUser })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params
        const userDel = await userDelete(id)
        return res.json({ userDel })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}

export async function findUser(req, res) {
    const {username} = req.user
    try {
        const user = await getUser({ username })
        return res.json({ user })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}

export async function allUsers(req, res) {
    try {
        const users = await getAllUsers()
        return res.json({ users })
    } catch (error) {
        res.status(500).json({ error: error.messsage })
    }
}