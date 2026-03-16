import express from "express"
import launchersR from "./routes/launchersR.js"

const port = 5050

const app = express()

app.use(express.json())

app.use("/api",launchersR)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
})