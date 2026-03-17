import express from "express"
import launchersR from "./routes/launchersR.js"
import authR from "./routes/authR.js"
import cors from "cors"

const port = 5050

const app = express()

app.use(express.json())

app.use(cors({
    exposedHeaders: ["Authorization"]
}))

app.use("/api", launchersR)

app.use("/api/auth", authR)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
})