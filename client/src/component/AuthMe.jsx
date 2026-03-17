import { useEffect } from "react"
import { getMe } from "../api/authApi"

export default function AuthMe({ children }) {
    useEffect(() => {
        async function fechMe() {
            const token = localStorage.getItem("token")
            const user = await getMe(token)
            localStorage.removeItem("user")
            console.log(user);
            localStorage.setItem("user",user)
        }
        fechMe()
    },[])

    return (
        <>{children}</>
    )
}
