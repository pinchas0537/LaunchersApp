import { Router } from "express"
import { createLauncher, allLaunchers, deleteLauncher, getLauncherById } from "../controller/launchersC.js"
import { validetLauncher } from "../middleware/createLaunchers.js"
import { validToken } from "../middleware/validToken.js"


const router = Router()

router.get("/launchers",validToken, allLaunchers)

router.get("/launchers/:id",validToken, getLauncherById)

router.post("/launchers",validToken, validetLauncher, createLauncher)

router.delete("/launchers/:id",validToken, deleteLauncher)

export default router