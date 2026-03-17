import { useState } from "react"
import { getAllLaunchers } from "../api/launchersApi"
import { useEffect } from "react"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router"
import Navbar from "../component/Navbar"
export default function Home() {
    const token = localStorage.getItem("token")
    const [launchers, setLaunchers] = useState([])
    const [error, setError] = useState("")
    const [city, setCity] = useState("")
    const [rocketType, setRocketType] = useState("")
    const [Wasitdestroyed, setWasitdestroyed] = useState("")
    const navigate = useNavigate()
    async function Launchers() {
        try {
            const arrToLaunchers = await getAllLaunchers(token)
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
            <Navbar />
            <nav>
                <input className="input h" type="text" onChange={e => setCity(e.target.value)} placeholder="חיפוש לפי עיר" />
                <input className="input h" type="text" onChange={e => setRocketType(e.target.value)} placeholder="חיפוש לפי סוג משגר" />
                <input className="input h" type="text" onChange={e => setWasitdestroyed(e.target.value)} placeholder="חיפוש לפי האם הושמד או לא? נא להזין ערך בוליאני" />
            </nav>
            {launchers.filter(launcher => launcher.city.includes(city) && launcher.rocketType.includes(rocketType) && launcher.Wasitdestroyed.includes(Wasitdestroyed))
                .map((launcher) => (
                    <div key={launcher._id}>
                        <button className="card" onClick={() => {
                            navigate(`/launcherdetails/${launcher._id}`)
                        }}>
                            <p><strong>ID:</strong>{launcher._id}</p>
                            <p><strong>עיר:</strong>{launcher.city}</p>
                            <p><strong>סוג המשגר:</strong>{launcher.rocketType}</p>
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