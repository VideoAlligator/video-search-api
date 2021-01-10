import { Router } from 'express'

import videos from './videos'
import search from './search'

const router = Router()
router.use('/', videos)
router.use('/', search)

export default router
