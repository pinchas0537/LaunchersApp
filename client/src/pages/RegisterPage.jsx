import { useState } from "react";
import Navbar from "../component/Navbar";
import { addUser } from "../api/authApi";

export default function RegisterPage() {
    const token = localStorage.getItem("token")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user_type, setUserType] = useState("")
    const [newUser, setNewUser] = useState(null)

    async function createUser() {
        const user = await addUser({ username, password, email, user_type }, token)
        console.log(user.successCreated);
        
        setNewUser(user.successCreated)
    }

    return (
        <>
            <Navbar />
            {newUser === null ? (
                <form onSubmit={async (e) => {
                    e.preventDefault()
                    await createUser()
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
                </div>
            </form>
            ):(
                <div>
                    <h1>המשתמש נוצר בהצלחה!</h1>
                    <p><strong>ID: </strong>{newUser.id}</p>
                    <p><strong>username: </strong>{newUser.username}</p>
                    <p><strong>password: </strong>{newUser.password}</p>
                </div>
            )}
        </>
    )
}
