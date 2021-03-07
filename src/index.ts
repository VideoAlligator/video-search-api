import express, { Request, Response, Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import routes from './routes'
import connect from '../src/connect'

const app: Application = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
)

app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
)

const db = process.env.MONGODB_URI

connect({ db })
app.use(routes)
