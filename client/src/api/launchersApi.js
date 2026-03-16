import axios, { isAxiosError } from "axios"

const url = "http://localhost:5050/api/launchers"

export async function createLauncher(launcher = {}) {
    try {
        const resultLauncher = await axios.post(url, launcher)
        return resultLauncher.data
    } catch (error) {
        if(isAxiosError(error)){
            console.error(error.request.data);
        }
        throw error
    }
}

export async function getAllLaunchers() {
    try {
        const launchers = await axios.get(url)
        return launchers.data
    } catch (error) {
        throw error
    }
}

export async function getLauncherById(id) {
    try {
        const launcher = await axios.get(url + `/${id}`)
        return launcher.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function deleteLauncher(id) {
    try {
        const successDelete = await axios.delete(url + `/${id}`)
        return successDelete
    } catch (error) {
        throw error
    }
}