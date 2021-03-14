import express, { Request, Response, Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import multer from 'multer'

import routes from './routes'
import connect from '../src/connect'

require('dotenv').config()

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

app.use(
  multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
      return filename
    },
  }).any()
)

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
)

const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`Application started successfully on port ${port}.`)
)

const db = process.env.MONGODB_URI

connect({ db })
app.use(routes)
