import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import AddLauncher from "./pages/AddLauncher"
import LauncherDetails from "./pages/LauncherDetails"
import LoginPage from "./pages/LoginPage"
import { ProtectedRoutesUserAdmin, ProtectedRoutesUserLoggedIn } from "./component/ProtectedRoutes"
import RegisterPage from "./pages/RegisterPage"
import AllUsers from "./pages/AllUsers"
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<ProtectedRoutesUserLoggedIn><Home /></ProtectedRoutesUserLoggedIn>} />
            <Route path="/addlauncher" element={<ProtectedRoutesUserLoggedIn><AddLauncher /></ProtectedRoutesUserLoggedIn>} />
            <Route path="/launcherdetails/:id" element={<ProtectedRoutesUserLoggedIn><LauncherDetails /></ProtectedRoutesUserLoggedIn>} />
            <Route path="/admin/registerpage" element={<ProtectedRoutesUserAdmin><RegisterPage /></ProtectedRoutesUserAdmin>} />
            <Route path="/admin/users" element={<ProtectedRoutesUserAdmin><AllUsers /></ProtectedRoutesUserAdmin>} />
        </Routes>
    )
}
