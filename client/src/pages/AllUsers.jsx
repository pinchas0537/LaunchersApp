import { useState } from "react"
import { useEffect } from "react"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router"
import Navbar from "../component/Navbar"
import { allUsers } from "../api/authApi"
export default function AllUsers() {
    const token = localStorage.getItem("token")
    const [usersArr, setUsers] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate()
    async function users() {
        try {
            const arrToUsers = await allUsers(token)
            setUsers(arrToUsers.users)
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.response.data.error);
            }
            console.error(error);
        }
    }
    useEffect(() => {
        users()
    }, [])

    return (
        <div className="home">
            <Navbar />
            {usersArr.map((launcher) => (
                    <div key={launcher._id}>
                        <button className="card" onClick={() => {
                            navigate(`/launcherdetails/${launcher._id}`)
                        }}>
                            <p><strong>ID:</strong>{usersArr._id}</p>
                            <p><strong>username:</strong>{usersArr.username}</p>
                        <p><strong>סוג המשגר:</strong>{ודקocketType}</p>
                            <p><strong>האם הושמד:</strong>{launcher.Wasitdestroyed}</p>
                        </button>
                    </div>
                ))}
            <div className="error">
                {error}
            </div>
        </div>
    )
}