import { Router } from 'express'
import Joi from 'joi'

import FrameController from '../controllers/frames'
import { validateQuery } from '../middleware/validate'

const router = Router()

const SEARCH_FRAME_SCHEMA = Joi.object({
  videoName: Joi.string(),
  keyword: Joi.string(),
})

router.get('/frames/:frameId', async (req, res) => {
  FrameController.retrieve(res, req.params.frameId)
})

router.get('/frames', validateQuery(SEARCH_FRAME_SCHEMA), FrameController.query)

export default router
