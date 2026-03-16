import { useState } from "react"
import { getAllLaunchers } from "../api/launchersApi"
import { useEffect } from "react"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router"
import LauncherDelete from "../component/LauncherDelete"
export default function Home() {
    const [launchers, setLaunchers] = useState([])
    const [error, setError] = useState("")
    const [city, setCity] = useState("")
    const [rocketType, setRocketType] = useState("")
    const navigate = useNavigate()
    async function Launchers() {
        try {
            const arrToLaunchers = await getAllLaunchers()
            setLaunchers(arrToLaunchers.launchers)
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.response.data.error);
            }
            console.error(error);
        }
    }
    useEffect(() => {
        Launchers()
    }, [])

    return (
        <div className="home">
            <nav>
                <button className="button" onClick={()=>{
                    navigate("/addlauncher")
                }}>להוסיף משגר חדש לחץ כאן</button>
                <input className="input h" type="text" onChange={e => setCity(e.target.value)} placeholder="חיפוש לפי עיר" />
                <input className="input h" type="text" onChange={e => setRocketType(e.target.value)} placeholder="חיפוש לפי סוג משגר" />
            </nav>
            {launchers.filter(launcher => launcher.city.includes(city) && launcher.rocketType.includes(rocketType))
                .map((launcher) => (
                    <div key={launcher._id}>
                        <button className="card" onClick={(e) => {
                            navigate(`/launcherdetails/${launcher._id}`)
                        }}>
                            <p><strong>ID:</strong>{launcher._id}</p>
                            <p><strong>עיר:</strong>{launcher.city}</p>
                            <p><strong>סוג המשגר:</strong>{launcher.rocketType}</p>
                        </button>
                    </div>
                ))}
            <div className="error">
                {error}
            </div>
        </div>
    )
}