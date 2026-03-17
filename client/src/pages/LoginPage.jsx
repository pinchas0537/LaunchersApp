import { useState } from "react";
import { login } from "../api/authApi"
import { useGlobalToken, useGlobalUser } from "../globalStore/useGlobalUser";
import { useNavigate } from "react-router";
import { isAxiosError } from "axios";

export default function LoginPage() {
    const { setToken } = useGlobalToken()
    const { setUser } = useGlobalUser()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function loginUser() {
       try {
         const user = await login({ username, password })
         localStorage.setItem("token", user.headers.authorization)
         localStorage.setItem("user", JSON.stringify(user.data.user))
         setToken(localStorage.getItem("token"))
         setUser(user.data.user)
       } catch (error) {
        if(isAxiosError(error)){
            console.error(error.response.data.error);
        }
        console.error(error);
       }
    }

    return (
        <form className="loginPage" onSubmit={async (e) => {
            e.preventDefault()
            await loginUser()
            setUsername("")
            setPassword("")
            navigate("/home", { replace: true })
        }}>
            <div>
                <div className="divinput">
                    <input value={username} onChange={e => setUsername(e.target.value)} className="input ilogin" placeholder="enter username" type="text" required />
                </div>
                <div className="divinput">
                    <input value={password} onChange={e => setPassword(e.target.value)} className="input ilogin" placeholder="enter password" type="password" required />
                </div>
                <button className="button login" type="submit">login</button>
            </div>
        </form>
    )
}
