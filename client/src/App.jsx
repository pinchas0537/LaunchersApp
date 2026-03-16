import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import AddLauncher from "./pages/AddLauncher"
import LauncherDetails from "./pages/LauncherDetails"
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addlauncher" element={<AddLauncher/>}/>
            <Route path="/launcherdetails/:id" element={<LauncherDetails/>}/>
        </Routes>
    )
}
