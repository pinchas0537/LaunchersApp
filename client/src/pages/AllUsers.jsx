import { useState } from "react"
import { useEffect } from "react"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router"
import Navbar from "../component/Navbar"
import { allUsers } from "../api/authApi"
import UpdeteUser from "../component/updeteUser"
export default function AllUsers() {
    const token = localStorage.getItem("token")
    const [usersArr, setUsers] = useState([])
    const [updaete, setUpdate] = useState(false)
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
            {usersArr.map((user) => (
                <div key={user._id}>
                    <button className="users" onClick={() => {
                        navigate(`/launcherdetails/${launcher._id}`)
                    }}>
                        <p><strong>ID:</strong>{user._id}</p>
                        <p><strong>username:</strong>{user.username}</p>
                        <p><strong>password:</strong>{user.password}</p>
                        <p><strong>email:</strong>{user.email}</p>
                        <p><strong>user_type:</strong>{user.user_type}</p>
                        <p><strong>last_login:</strong>{user.last_login}</p>
                    <button onClick={() => {
                        setUpdate(true)
                    }}>update user</button>
                    </button>
                    
                    {updaete === true ? (<>
                        <UpdeteUser cancellation={() => setUpdate(false)} />
                    </>) : ""}
                </div>
            ))}
            <div className="error">
                {error}
            </div>
        </div>
    )
}