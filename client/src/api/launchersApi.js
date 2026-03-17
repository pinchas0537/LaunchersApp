import axios, { isAxiosError } from "axios"

const url = "http://localhost:5050/api/launchers"

export async function createLauncher(launcher = {}, token) {
    try {
        const resultLauncher = await axios.post(url, launcher, {
            headers: {
                Authorization: token
            }
        })
        return resultLauncher.data
    } catch (error) {
        if (isAxiosError(error)) {
            console.error(error.request.data);
        }
        throw error
    }
}

export async function getAllLaunchers(token) {
    try {
        const launchers = await axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        return launchers.data
    } catch (error) {
        throw error
    }
}

export async function getLauncherById(id, token) {
    try {
        const launcher = await axios.get(url + `/${id}`, {
            headers: {
                Authorization: token
            }
        })
        return launcher.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function deleteLauncher(id, token) {
    try {
        const successDelete = await axios.delete(url + `/${id}`, {
            headers: {
                Authorization: token
            }
        })
        return successDelete
    } catch (error) {
        throw error
    }
}