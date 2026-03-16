import { useParams } from "react-router"
import { getLauncherById } from "../api/launchersApi"
import { useEffect, useState } from "react"
import { isAxiosError } from "axios"
import LauncherDelete from "../component/LauncherDelete"

export default function LauncherDetails() {
  const { id } = useParams()
  const [launcher, setLauncher] = useState({})
  const [error, setError] = useState("")
  const [deleted,setDeleted] = useState(false)

  async function getLauncherDetailsById() {
    try {
      const resultLauncher = await getLauncherById(id)
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
      <div className="card details">
        <p><strong>ID:</strong>{launcher._id}</p>
        <p><strong>עיר:</strong>{launcher.city}</p>
        <p><strong>נקודת רוחב:</strong>{launcher.latitude}</p>
        <p><strong>נקודת אורך:</strong>{launcher.longitude}</p>
        <p><strong>סוג המשגר:</strong>{launcher.rocketType}</p>
        <p><strong>שם:</strong>{launcher.name}</p>
        <button className="delete" onClick={setDeleted(true)}>מחק</button>
        {deleted === true? <LauncherDelete id={launcher._id}/>:""}
      </div>
      <div className="error">
        {error}
      </div>
    </>
  )
}
