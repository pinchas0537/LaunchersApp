import { useParams } from "react-router"
import { getLauncherById } from "../api/launchersApi"
import { useEffect, useState } from "react"
import { isAxiosError } from "axios"
import LauncherDelete from "../component/LauncherDelete"
import Navbar from "../component/Navbar"

export default function LauncherDetails() {
  const token = localStorage.getItem("token")
  const userString = localStorage.getItem("user")
  const user = JSON.parse(userString)
  const { id } = useParams()
  const [launcher, setLauncher] = useState({})
  const [error, setError] = useState("")
  const [deleted, setDeleted] = useState(false)

  async function getLauncherDetailsById() {
    try {
      const resultLauncher = await getLauncherById(id, token)
      setLauncher(resultLauncher.launcher)
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response.data.error);
      }
      console.error(error)
    }
  }
  useEffect(() => {
    getLauncherDetailsById()
  }, [])
  return (
    <>
      <Navbar />
      <div className="card details">
        <p><strong>ID:</strong>{launcher._id}</p>
        <p><strong>עיר:</strong>{launcher.city}</p>
        <p><strong>נקודת רוחב:</strong>{launcher.latitude}</p>
        <p><strong>נקודת אורך:</strong>{launcher.longitude}</p>
        <p><strong>סוג המשגר:</strong>{launcher.rocketType}</p>
        <p><strong>שם:</strong>{launcher.name}</p>
        <p><strong>האם הושמד:</strong>{launcher.Wasitdestroyed}</p>
        {user.user_type !== "air" ? (
          <>
            <button className="delete" onClick={() => {
              setDeleted(true)
            }}>מחק</button>
            {deleted === true ? (
              <LauncherDelete id={id} cancellation={() => setDeleted(false)} />
            ) : ""}
          </>
        ) : (
          <button >לעדכן שהמשגר הושמד לחץ כאן</button>
        )}
      </div>
      <div className="error">
        {error}
      </div>
    </>
  )
}
