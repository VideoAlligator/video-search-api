import { Router } from 'express'
import Joi from '@hapi/joi'

import { validateQuery } from '../middleware/validate'
import VideoSearchController from '../controllers/search'

const router = Router()

const SEARCH_SCHEMA = Joi.object({
  title: Joi.string(),
  keyword: Joi.string(),
})

router.get(
  '/search',
  validateQuery(SEARCH_SCHEMA),
  VideoSearchController.searchByParam
)

export default router
