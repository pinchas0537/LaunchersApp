import express from "express"
import launchersR from "./routes/launchersR.js"
import cors from "cors"
 
const port = 5050

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api",launchersR)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
})