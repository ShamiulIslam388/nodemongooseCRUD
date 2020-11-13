const express = require('express')
const bodyParser = require('body-parser')
const databaseConnection = require('./database/db')
const userRouter = require('./routers/routes.users')

require('dotenv').config({ path: './config/.env'})

const app = express()
databaseConnection()

app.use(express.json())


app.use('/users',userRouter)

const port = process.env.PORT
app.listen(port,()=> console.log(`Server up and running at port ${port}`))