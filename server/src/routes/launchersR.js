import { Router } from "express"
import { createLauncher, allLaunchers, deleteLauncher, getLauncherById, getLauncherByQuery } from "../controller/launchersC.js"

const router = Router()

router.get("/launchers",allLaunchers)

router.get("/launchers/:id",getLauncherById)

router.get("/launchers/query",getLauncherByQuery)

router.post("/launchers", createLauncher)

router.delete("/launchers/:id",deleteLauncher)

export default router