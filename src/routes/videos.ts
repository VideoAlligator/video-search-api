import { Router } from 'express'
import Joi from 'joi'

import VideoController from '../controllers/videos'
import { validateBody, validateQuery } from '../middleware/validate'

const router = Router()

const VIDEO_DETAIL = Joi.object().keys({
  keyword: Joi.string().required(),
  timestamp: Joi.string().required(),
})

const VIDEO_SCHEMA = Joi.object({
  title: Joi.string().required(),
  duration: Joi.number().required(),
  overview: Joi.string(),
  genres: Joi.array().items(Joi.string()),
  keywords: Joi.array().items(Joi.string()),
  posterUrl: Joi.string().required(),
  details: Joi.array().items(VIDEO_DETAIL),
})

const SEARCH_VIDEO_SCHEMA = Joi.object({
  title: Joi.string(),
  keyword: Joi.string(),
})

router.post('/videos', validateBody(VIDEO_SCHEMA), async (req, res) => {
  VideoController.create(res, req.body)
})

// including list
router.get('/videos', validateQuery(SEARCH_VIDEO_SCHEMA), VideoController.query)

router.get('/videos/:videoId', validateBody(VIDEO_SCHEMA), async (req, res) => {
  VideoController.retrieve(res, req.params.videoId)
})

router.delete('/videos', async (req, res) => {
  VideoController.removeAll(res)
})

router.delete('/videos/:videoId', async (req, res) => {
  VideoController.remove(res, req.params.videoId)
})

export default router
