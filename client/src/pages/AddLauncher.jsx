import { useState } from "react"
import { createLauncher } from "../api/launchersApi"

export default function AddLauncher() {
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [rocketType, setRocketType] = useState("")
  async function addLauncher() {
    try {
      const result = await createLauncher({ name, rocketType, longitude, latitude, city })
      return result
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      await addLauncher()
      setCity("")
      setLatitude("")
      setLongitude("")
      setName("")
      setRocketType("")
    }}>
      <div className="form">
        <input className="input" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="enter name" required />
        <input className="input" value={city} type="text" onChange={e => setCity(e.target.value)} placeholder="enter city" required />
        <input className="input" value={latitude} type="number" onChange={e => setLatitude(e.target.value)} placeholder="enter latitude" required />
        <input className="input" value={longitude} type="number" onChange={e => setLongitude(e.target.value)} placeholder="enter longitude" required />
        <select className="select" required value={rocketType} onChange={e => setRocketType(e.target.value)}>
          <option value="">בחר את סוג המשגר</option>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
      </div>
      <div className="add">
        <button className="button form" type="submit"> להוסיף לחץ כאן</button>
      </div>
    </form>
  )
}