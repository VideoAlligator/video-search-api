import { Router } from 'express'
import Joi from 'joi'

import VideoController from '../controllers/videos'
import { validateBody, validateQuery } from '../middleware/validate'
import { Genres, Keyword } from '../models/constants'

const router = Router()

const ANNOTATION_SCHEMA = Joi.object().keys({
  keyword: Joi.string()
    .valid(...Object.values(Keyword))
    .required(),
  score: Joi.number().required(),
})

const SEGMENT_SCHEMA = Joi.object().keys({
  keyword: Joi.string()
    .valid(...Object.values(Keyword))
    .required(),
  start: Joi.number().required(),
  end: Joi.number().required(),
})

const VIDEO_SCHEMA = Joi.object({
  title: Joi.string().required(),
  runtime: Joi.number().required(),
  overview: Joi.string(),
  genres: Joi.array().items(Joi.string().valid(...Object.values(Genres))),
  posterUrl: Joi.string().required(),
  releaseDate: Joi.string(),
  annotations: Joi.array().items(ANNOTATION_SCHEMA).required(),
  segments: Joi.array().items(SEGMENT_SCHEMA).required(),
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

router.get('/videos/:videoId', async (req, res) => {
  VideoController.retrieve(res, req.params.videoId)
})

router.delete('/videos', async (req, res) => {
  VideoController.removeAll(res)
})

router.delete('/videos/:videoId', async (req, res) => {
  VideoController.remove(res, req.params.videoId)
})

export default router
