import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import Joi from 'joi'

import FrameController from '../controllers/frames'
import { validateQuery } from '../middleware/validate'

const router = Router()

const SEARCH_FRAME_SCHEMA = Joi.object({
  videoName: Joi.string(),
})

router.post('/frames', async (req, res) => {
  var newFrame = {
    videoName: 'Cats & Dogs',
    keyword: 'dog',
    img: {
      data: fs.readFileSync(
        // req.file.filename
        path.join(__dirname + '/uploads/' + 'dog.jpg')
      ),
      contentType: 'image/jpg',
    },
  }
  FrameController.create(res, newFrame)
})

router.get('/frames/:frameId', async (req, res) => {
  FrameController.retrieve(res, req.params.frameId)
})

router.get('/frames', validateQuery(SEARCH_FRAME_SCHEMA), FrameController.query)

export default router
