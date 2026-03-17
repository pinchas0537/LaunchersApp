import {deleteLauncher} from "../api/launchersApi"

export default function LauncherDelete({id ,cancellation }) {
    async function deleteLauncherById() {
        await deleteLauncher(id)
    }
    return (
        <div className="components">
            <span className="">האם למחוק את המשגר {id}?</span>
            <button onClick={()=>{
                deleteLauncherById()
            }} className="delete">מחק</button>
            <button onClick={cancellation}> ביטול</button>
        </div>
    )
}