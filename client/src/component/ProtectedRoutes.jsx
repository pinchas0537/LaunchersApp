import { Navigate } from "react-router"

export function ProtectedRoutesUserLoggedIn({ children }) {
    const token = localStorage.getItem("token")
    if (!token) return <Navigate to="/" replace />
    return <>{children}</>
}

export function ProtectedRoutesUserAdmin({ children }) {
    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)
    if (!user) return <Navigate to="/" replace />
    if(user.user_type !== "admin") return <Navigate to="/home"/>
    return <>{children}</>
}
