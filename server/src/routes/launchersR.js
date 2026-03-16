import { Router } from "express"
import { createLauncher, allLaunchers, deleteLauncher, getLauncherById } from "../controller/launchersC.js"
import { validetLauncher } from "../middleware/createLaunchers.js"

const router = Router()

router.get("/launchers", allLaunchers)

router.get("/launchers/:id", getLauncherById)

router.post("/launchers", validetLauncher, createLauncher)

router.delete("/launchers/:id", deleteLauncher)

export default router