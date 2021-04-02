import { Router } from 'express'

import FrameController from '../controllers/frames'

const router = Router()

router.get('/frames/:frameId', async (req, res) => {
  FrameController.retrieve(res, req.params.frameId)
})

router.get('/frames/:title/:keyword', async (req, res) => {
  FrameController.retrieveByTitleAndKeyword(
    res,
    req.params.title,
    req.params.keyword
  )
})

export default router
