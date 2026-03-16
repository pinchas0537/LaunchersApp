import {deleteLauncher} from "../api/launchersApi"

export default function LauncherDelete(id) {
    async function deleteLauncherById() {
        await deleteLauncher(id)
    }
    return (
        <div className="deleted">
            <span className="">האם אתה בטוח שברצונך למחוק את המשגר הזה?</span>
            <button onClick={()=>{
                deleteLauncherById()
            }} className="delete">מחק</button>
            <button> ביטול</button>
        </div>
    )
}