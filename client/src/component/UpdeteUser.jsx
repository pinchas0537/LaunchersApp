import { useState } from "react"
import { updateUser } from "../api/authApi"

export default function UpdeteUser({cancellation}) {
    const token = localStorage.getItem("token")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user_type, setUserType] = useState("")
    const [update, setUpdate] = useState(null)
    async function userUpdeate() {
        const user = await updateUser({ username, password, email, user_type }, token)
        console.log(user)
        setUpdate(user)
    }
    return (
        <div className="components">
            <form onSubmit={async (e) => {
                e.preventDefault()
                await userUpdeate()
                setEmail("")
                setPassword("")
                setUserType("")
                setUsername("")
            }}>
                <div>
                    <input className="input" value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="enter user name" required />
                    <input className="input" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="enter password" required />
                    <input className="input" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="enter email" required />
                    <input className="input" value={user_type} onChange={e => setUserType(e.target.value)} type="text" placeholder=" enter user type" required />
                    <button type="submit">added user</button>
                    <button onClick={cancellation}>Cancellation</button>
                </div>
            </form>
            <div>{update}</div>
        </div>
    )
}