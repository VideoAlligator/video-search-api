import { Router } from 'express'
import fs from 'fs'

import FrameController from '../controllers/frames'

const router = Router()

router.post('/frames', async (req, res) => {
  var newFrame = {
    img: {
      data: fs.readFileSync(
        '/Users/cosmosliu/Desktop/video-search-api/src/uploads/dog.jpg'
      ),
      contentType: 'image/jpg',
    },
  }
  FrameController.create(res, newFrame)
})

router.get('/frames', async (req, res) => {
  FrameController.findAll(res)
})

router.get('/frames/:frameId', async (req, res) => {
  FrameController.retrieve(res, req.params.frameId)
})

export default router
