import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'

// initializing our express app
const app = express()

app.use(cors({
  credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

// creating our server
const server = http.createServer(app)

server.listen(3001, () => [
  console.log('BALT server is now running on http://localhost:3001')
])

const MONGO_URL = "mongodb+srv://bisualtapp_mongoadmin:f12OiuSiZ3FtF48p@bisualtapp.qqklfui.mongodb.net/?retryWrites=true&w=majority"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(`MongoDB Error: ${error}`))