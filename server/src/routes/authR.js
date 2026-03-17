import { Router } from "express"
import { allUsers, create, deleteUser, updateUser, findUser, loginUser } from "../controller/authC.js"
import { validCreated } from "../middleware/authM.js"
import { validAdmin } from "../middleware/authAdmin.js"
import { validIDAuth } from "../middleware/validIDAuth.js"
import { validId } from "../middleware/validId.js"
import { validTokenGetMe } from "../middleware/validtokenGETme.js"

const router = Router()

router.post("/register/create", validAdmin, validCreated, create)

router.put("/register/update", validAdmin, validIDAuth, validCreated, updateUser)

router.delete("/register/delete/:id", validAdmin, validId, deleteUser)

router.post("/login", loginUser)

router.get("/getUser", validTokenGetMe, findUser)

router.get("/register/getUsers", validAdmin, allUsers)

export default router