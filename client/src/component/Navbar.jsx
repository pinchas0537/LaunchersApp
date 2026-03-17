import { useNavigate } from "react-router"

export default function Navbar() {
    const userJson = localStorage.getItem("user")
    const user = JSON.parse(userJson)
    const navigate = useNavigate()

    if (user.user_type === "admin") {
        return (
            <nav>
                <button onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    navigate("/", { replace: true })
                }}>Logout</button>
                <button onClick={() => {
                    if (!user) return navigate("/", { replace: true })
                    const userAlert = {
                        username: user.username,
                        user_type: user.user_type
                    }
                    const userAlertString = JSON.stringify(userAlert)
                    alert(userAlertString)
                }}>User logged in</button>
                <button onClick={() => {
                    navigate("/home", { replace: true })
                }}>See all launchers</button>
                <button className="" onClick={() => {
                    navigate("/addlauncher")
                }}>Add a new launcher click here</button>
                <button onClick={() => {
                    navigate("/admin/registerpage", { replace: true })
                }}>create user</button>
                <button onClick={()=>{
                    navigate("/admin/users" ,{replace:true})
                }}>allUsers</button>
            </nav>
        )
    }
    else if (user.user_type === "intelligence") {
        return (
            <nav>
                <button onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    navigate("/", { replace: true })
                }}>Logout</button>
                <button onClick={() => {
                    if (!user) return navigate("/", { replace: true })
                    const userAlert = {
                        username: user.username,
                        user_type: user.user_type
                    }
                    const userAlertString = JSON.stringify(userAlert)
                    alert(userAlertString)
                }}>User logged in</button>
                <button onClick={() => {
                    navigate("/home", { replace: true })
                }}>See all launchers</button>
                <button className="" onClick={() => {
                    navigate("/addlauncher")
                }}>Add a new launcher click here</button>
            </nav>
        )
    }
    else if (user.user_type === "air") {
        return (
            <nav>
                <button onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    navigate("/", { replace: true })
                }}>Logout</button>
                <button onClick={() => {
                    if (!user) return navigate("/", { replace: true })
                    const userAlert = {
                        username: user.username,
                        user_type: user.user_type
                    }
                    const userAlertString = JSON.stringify(userAlert)
                    alert(userAlertString)
                }}>User logged in</button>
                <button onClick={() => {
                    navigate("/home", { replace: true })
                }}>See all launchers</button>
            </nav>
        )
    }
}