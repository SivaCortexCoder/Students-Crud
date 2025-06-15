import express from 'express'
import cors from 'cors'
import connecDb from './config/db.js'
import StudentRoute from './routes/studentRoute.js'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//Database connecting
connecDb()


app.use('/',StudentRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Created and running in http://localhost:${PORT}`)
})